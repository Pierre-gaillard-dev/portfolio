# Portfolio — Pierre Gaillard

Code source de [pierre-gaillard.dev](https://pierre-gaillard.dev) : mon portfolio de développeur, bilingue (FR / EN), généré en statique avec [Astro](https://astro.build).

Le dépôt est un monorepo pnpm prévu pour accueillir plusieurs services sous `apps/`, déployés ensemble sur [Dokploy](https://dokploy.com).

## Stack

| Domaine     | Outils                                        |
| ----------- | --------------------------------------------- |
| Site        | Astro 7 (sortie statique), TypeScript, CSS    |
| Données     | Zod (schémas), JSON de traduction pour l'i18n |
| Monorepo    | pnpm workspaces                               |
| Qualité     | ESLint, Prettier                              |
| Conteneur   | Docker multi-stage, nginx                     |
| Hébergement | Dokploy (Traefik, Let's Encrypt)              |

## Structure

```text
.
├── apps/
│   └── landing/          # site vitrine Astro (pierre-gaillard.dev)
├── api/                  # ancienne API PHP (hors workspace, voir ARCHITECTURE.md)
├── compose.yml           # tous les services, déployés par Dokploy
├── pnpm-workspace.yaml
└── package.json          # scripts racine (lint, format, raccourcis vers landing)
```

Le fonctionnement détaillé (routing i18n, données, build, déploiement) est décrit dans [ARCHITECTURE.md](./ARCHITECTURE.md).

## Démarrage

Prérequis : Node.js ≥ 22.12 et pnpm (la version est fixée par `packageManager`, `corepack enable` suffit).

```sh
corepack enable
pnpm install
pnpm dev          # http://localhost:4321
```

### Scripts

À lancer depuis la racine :

| Commande      | Effet                                         |
| ------------- | --------------------------------------------- |
| `pnpm dev`    | serveur de dev du landing                     |
| `pnpm build`  | build statique dans `apps/landing/dist`       |
| `pnpm start`  | prévisualise le build                         |
| `pnpm lint`   | ESLint sur tout le dépôt (`lint:fix` corrige) |
| `pnpm format` | Prettier (`format:check` en CI)               |

Pour cibler un service précis : `pnpm --filter @portfolio/<app> <script>`.

## Docker

Chaque service a son `Dockerfile` dans `apps/<app>/`, toujours construit **depuis la racine** (le lockfile et le workspace y sont).

```sh
# un service seul
docker build -f apps/landing/Dockerfile -t portfolio-landing .
docker run --rm -p 8080:80 portfolio-landing   # http://localhost:8080

# toute la stack
docker compose up --build
```

## Déploiement

Le projet est déployé sur Dokploy comme une application **Docker Compose** pointant sur `compose.yml`.

Le compose ne contient aucune configuration de routage : domaines, HTTPS et réseau Traefik se configurent dans Dokploy, onglet _Domains_ de chaque service (ex. `landing` → `pierre-gaillard.dev`, port `80`, certificat `letsencrypt`).

## Ajouter un service

1. Créer `apps/<nom>/` avec un `package.json` nommé `@portfolio/<nom>`.
2. L'ajouter dans `pnpm-workspace.yaml`.
3. Écrire `apps/<nom>/Dockerfile` sur le modèle de `apps/landing/Dockerfile`.
4. Déclarer le service dans `compose.yml`.
5. Lui attribuer un domaine dans Dokploy.

## Licence

Code publié à titre de démonstration. Les contenus (textes, images, CV) restent la propriété de Pierre Gaillard.
