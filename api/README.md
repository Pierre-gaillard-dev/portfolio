# API PHP Portfolio

## Architecture

```bash
/app
├── Controllers/
│   └── ProjectController.php
├── Entities/
│   └── Project.php
├── Services/
│   └── ProjectService.php
├── Repositories/
│   └── ProjectRepository.php

/config
└── database.php

/core
├── Router.php                 ← Routeur custom ou minimaliste
├── Controller.php            ← Base controller (helpers, JSON, etc.)
├── Request.php               ← Parser HTTP request
├── Response.php              ← JSON/HTML/redirect helpers
├── Env.php                   ← Loader .env
├── DB.php                    ← Singleton PDO

/public
├── index.php                 ← Front controller (entrypoint)
└── .htaccess                 ← Redirection vers index.php

/.env
```

## Configuration

Cette API PHP remplace l'API Next.js originale pour gérer l'activité de développement.

## Endpoints

### GET /api/activity.php

Récupère l'activité actuelle

**response :**

```json
{
  "projectName": "nom-du-projet",
  "fileName": "fichier.tsx",
  "timeStamp": "2025-01-07T10:30:00+00:00"
}
```

### POST /api/activity.php

Met à jour l'activité actuelle

**body :**

```json
{
  "projectName": "nom-du-projet",
  "fileName": "fichier.tsx"
}
```

**response :**

```json
{
  "success": true
}
```

### POST /api/activity.php (reset)

**body :**

```json
{}
```

**response :**

```json
{
  "success": true
}
```

## Déploiement

1. Uploadez les fichiers PHP sur votre serveur
2. Assurez-vous que le dossier `api/data/` est accessible en écriture
3. Mettez à jour l'URL de l'API dans `Activity.tsx`
4. Configurez les domaines CORS dans `config.php`
