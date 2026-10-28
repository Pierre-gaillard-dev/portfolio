# Architecture

Ce document décrit comment le dépôt est organisé et pourquoi. Pour l'installation et les commandes, voir le [README](./README.md).

## Vue d'ensemble

```text
                  Internet
                     │
              ┌──────▼──────┐
              │   Traefik   │  TLS (Let's Encrypt), routage par domaine
              │  (Dokploy)  │  configuré dans l'UI Dokploy
              └──────┬──────┘
                     │ dokploy-network
        ┌────────────┼─────────────┐
        ▼            ▼             ▼
   ┌─────────┐   ┌─────────┐   ┌─────────┐
   │ landing │   │ (api)   │   │  ...    │   un conteneur par apps/<nom>
   │  nginx  │   │ à venir │   │         │
   └─────────┘   └─────────┘   └─────────┘
```

- **Un service = un dossier `apps/<nom>/`** avec son propre `Dockerfile`.
- **`compose.yml`** liste les services ; il ne dit rien du routage.
- **Dokploy** construit les images, injecte les labels Traefik et le réseau `dokploy-network`, et gère les certificats.

## Monorepo

Le dépôt est un workspace pnpm (`pnpm-workspace.yaml`) :

- `apps/*` : services déployables (`@portfolio/<nom>`) ;
- `packages/*` : code partagé entre services (vide pour l'instant).

L'outillage commun (ESLint, Prettier, TypeScript) est installé à la racine. Les scripts racine `dev`, `build` et `start` délèguent au landing via `pnpm --filter`.

## `apps/landing`

Site vitrine, généré entièrement en statique par Astro. Pas d'adapter serveur : la sortie (`dist/`) est un ensemble de fichiers HTML/CSS/JS servis par nginx.

### Organisation de `src/`

```text
src/
├── pages/        # routes (voir « Routing et i18n »)
├── partials/     # grandes sections d'une page (Hero, Projects, Skills, Footer)
├── components/   # composants réutilisables (Navbar, Head, ProjectCard, Md…)
├── data/         # accès aux données, schémas Zod, constantes
├── i18n/         # traductions de l'interface (fr.json, en.json)
├── theme/        # variables CSS et styles globaux
└── utils/        # helpers purs (urlFor, slugify, markdown, seededRandom)
```

Chaque composant a, si besoin, sa feuille `.css` à côté de lui plutôt qu'un fichier global.

### Routing et i18n

- Langues : `fr` (par défaut) et `en`, déclarées dans `astro.config.mjs` et `src/i18n/index.ts`.
- La langue par défaut **n'a pas de préfixe** : `/` est en français, `/en` en anglais.
- Les segments d'URL sont eux aussi traduits, via la clé `url` des fichiers de locale :

  | Page          | FR                   | EN                       |
  | ------------- | -------------------- | ------------------------ |
  | Accueil       | `/`                  | `/en`                    |
  | Liste projets | `/projets`           | `/en/projects`           |
  | Détail projet | `/projets/<slug-fr>` | `/en/projects/<slug-en>` |

  D'où l'arborescence `pages/[...lang]/[projects]/[slug]/` : les trois segments sont dynamiques et générés par `getStaticPaths`.

- `trailingSlash: 'never'` : aucune URL ne se termine par `/`. nginx est configuré en conséquence (voir plus bas).
- Toujours construire les liens avec `urlFor(lang, ...segments)`, qui retire la langue par défaut et préfixe le domaine en production.
- `useTranslations(lang)` renvoie les textes d'interface ; une langue inconnue retombe sur le français.

### Données des projets

```text
projects.mock.ts ──► ProjectCache (singleton) ──► projects.queries.ts ──► pages
                         │
                         └─ getProjectTranslations() : éclate chaque projet
                            en une variante par langue
```

- **`projects.schemas.ts`** définit le modèle avec Zod. Un `Project` contient les champs communs (couverture, GitHub, stacks) et un dictionnaire `translations` par langue (titre, slug, méta SEO, blocs de contenu).
- **`ProjectCache`** charge les projets une seule fois par build et précalcule leurs versions traduites, avec pour chacune les liens vers les autres langues (`language_variants`, utilisés pour le sélecteur de langue et les balises `hreflang`).
- **`projects.queries.ts`** est la seule interface que les pages doivent utiliser (`getProjects`, `getTranslatedProjects`, `getProject`…).
- Le contenu des projets est découpé en **blocs** (`text`, `carousel`, `demo`, `video`) écrits en Markdown et rendus par `Md.astro`.

La source est aujourd'hui **un mock** (`projects.mock.ts`). Pour brancher une vraie API, seul `ProjectCache.sync()` doit changer : le reste du code dépend des queries, pas de la source.

### SEO

`Head.astro` centralise titre, meta description, canonical et alternates de langue. `@astrojs/sitemap` génère le sitemap à partir de `site` (`astro.config.mjs`). Les images distantes autorisées pour `astro:assets` sont listées dans `image.domains`.

## Build et image Docker

`apps/landing/Dockerfile`, construit depuis la racine du dépôt :

| Étape     | Base                  | Rôle                                                                |
| --------- | --------------------- | ------------------------------------------------------------------- |
| `base`    | `node:24-alpine`      | active pnpm via corepack (version lue dans `packageManager`)        |
| `deps`    | `base`                | copie seulement lockfile et manifests, installe les deps du landing |
| `build`   | `deps`                | copie les sources et lance `astro build`                            |
| `runtime` | `nginx:stable-alpine` | ne contient que `dist/` et la conf nginx                            |

Choix :

- **Contexte = racine** : le lockfile et le workspace sont à la racine ; tous les futurs services suivront ce modèle.
- **Manifests copiés avant les sources** : la couche d'installation reste en cache tant que les dépendances ne changent pas. Le store pnpm est aussi monté en cache BuildKit.
- **`--filter @portfolio/landing...`** : seules les dépendances de ce service sont installées.
- **Image finale sans Node** : plus petite et moins exposée.
- **`.dockerignore`** à la racine exclut `node_modules`, `dist`, `.astro`, `.env*` et `.git`.

### nginx (`apps/landing/nginx.conf`)

- `try_files $uri $uri.html $uri/index.html =404` : `/en/projects` sert `en/projects/index.html` **sans redirection**, conformément à `trailingSlash: 'never'`.
- `/_astro/*` (fichiers hashés) : cache `immutable` d'un an.
- `absolute_redirect off` : nginx est derrière Traefik, il ne doit pas exposer son port ni son schéma interne dans un `Location`.
- gzip, en-têtes de sécurité de base, `404.html` en page d'erreur.
- `/healthz` répond `200`, utilisé par le `HEALTHCHECK` de l'image.

## Déploiement

1. Dokploy suit le dépôt et construit les services de `compose.yml`.
2. Pour chaque service ayant un domaine dans l'UI, il ajoute les labels Traefik et le réseau `dokploy-network`.
3. Traefik termine le TLS et route vers le port exposé du conteneur.

Laisser le routage à Dokploy garde un `compose.yml` court, lançable tel quel en local, et évite les conflits entre labels écrits à la main et labels générés.

## `api/` (historique)

Ancienne API PHP (contrôleurs, services, repositories, auth), qui servait les projets et l'activité de développement à la version Next.js du site. Elle n'est **pas** dans le workspace pnpm ni dans `compose.yml`, et n'est plus utilisée par le landing (qui lit le mock).

Elle est conservée en attendant la future API, qui devrait devenir un service `apps/api/` avec son propre Dockerfile.

## Dette connue

- `.github/workflows/` date de la version Next.js : `npm ci`, Node 20 et déploiement FTP vers OVH. Ces workflows sont à réécrire pour pnpm, ou à supprimer au profit de Dokploy.
- `tsconfig.json` à la racine contient encore la config Next.js ; restent aussi `next.config.ts`, `next-env.d.ts` et `index.html`.
- Les données des projets viennent d'un mock en attendant l'API.
- Pas encore de page `src/pages/404.astro` : nginx renvoie sa 404 par défaut.
