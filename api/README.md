# API PHP Portfolio

## Architecture

```bash
/app
├── Controllers/
│   ├── ProjectController.php
|   └── LanguageController.php
├── Entities/
│   ├── Project.php
│   └── Language.php
├── Services/
│   ├── ProjectService.php
│   └── LanguageService.php
├── Repositories/
│   ├── ProjectRepository.php
│   └── LanguageRepository.php

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

### Activity API

#### GET /api/activity.php

Récupère l'activité actuelle

**response :**

```json
{
  "projectName": "nom-du-projet",
  "fileName": "fichier.tsx",
  "timeStamp": "2025-01-07T10:30:00+00:00"
}
```

#### POST /api/activity.php

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

#### POST /api/activity.php (reset)

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

### Projects API

#### GET /api/projects

Récupère tous les projets

**Response:**

```json
[
  {
    "id": 1,
    "title": "Mon Projet",
    "img": "/img/projects/projet.jpg",
    "github": "https://github.com/user/project",
    "demo": "https://demo.example.com",
    "is_playable_demo": "true",
    "demo_height": 600,
    "demo_width": 800,
    "aspect_ratio": 1.33,
    "video": null,
    "description": "Description du projet",
    "conditions": "MIT License",
    "copyright": "© 2025 Author",
    "started_at": "2025-01-01 00:00:00",
    "finished_at": "2025-06-01 00:00:00",
    "duration": 152,
    "created_at": "2025-01-01 00:00:00",
    "updated_at": "2025-01-01 00:00:00"
  }
]
```

#### GET /api/projects/{id}

Récupère un projet spécifique par son ID

**Response:**

```json
{
  "id": 1,
  "title": "Mon Projet",
  "img": "/img/projects/projet.jpg",
  "github": "https://github.com/user/project",
  "demo": "https://demo.example.com",
  "is_playable_demo": "true",
  "demo_height": 600,
  "demo_width": 800,
  "aspect_ratio": 1.33,
  "video": null,
  "description": "Description du projet",
  "conditions": "MIT License",
  "copyright": "© 2025 Author",
  "started_at": "2025-01-01 00:00:00",
  "finished_at": "2025-06-01 00:00:00",
  "duration": 152,
  "created_at": "2025-01-01 00:00:00",
  "updated_at": "2025-01-01 00:00:00"
}
```

#### POST /api/projects

Crée un nouveau projet

**Body:**

```json
{
  "title": "Mon Nouveau Projet",
  "img": "/img/projects/nouveau-projet.jpg",
  "github": "https://github.com/user/nouveau-projet",
  "demo": "https://demo.example.com",
  "is_playable_demo": "true",
  "demo_height": 600,
  "demo_width": 800,
  "aspect_ratio": 1.33,
  "video": null,
  "description": "Description du nouveau projet",
  "conditions": "MIT License",
  "copyright": "© 2025 Author",
  "started_at": "2025-01-01",
  "finished_at": "2025-06-01",
  "duration": 152
}
```

### Languages API

#### GET /api/languages

Récupère tous les langages de programmation

**Response:**

```json
[
  {
    "id": 1,
    "name": "JavaScript",
    "slug": "javascript",
    "created_at": "2025-01-01 00:00:00",
    "updated_at": "2025-01-01 00:00:00"
  },
  {
    "id": 2,
    "name": "TypeScript",
    "slug": "typescript",
    "created_at": "2025-01-01 00:00:00",
    "updated_at": "2025-01-01 00:00:00"
  }
]
```

#### GET /api/languages/{id}

Récupère un langage spécifique par son ID

**Response:**

```json
{
  "id": 1,
  "name": "JavaScript",
  "slug": "javascript",
  "created_at": "2025-01-01 00:00:00",
  "updated_at": "2025-01-01 00:00:00"
}
```

#### POST /api/languages

Crée un nouveau langage

**Body:**

```json
{
  "name": "Python",
  "slug": "python"
}
```

**Response:**

```json
{
  "id": 3,
  "name": "Python",
  "slug": "python",
  "created_at": "2025-01-01 00:00:00",
  "updated_at": "2025-01-01 00:00:00"
}
```

#### PUT /api/languages/{id}

Met à jour un langage existant

**Body:**

```json
{
  "name": "Python 3",
  "slug": "python3"
}
```

**Response:**

```json
{
  "id": 3,
  "name": "Python 3",
  "slug": "python3",
  "created_at": "2025-01-01 00:00:00",
  "updated_at": "2025-01-01 10:30:00"
}
```

#### DELETE /api/languages/{id}

Supprime un langage

**Response:**

```json
{
  "message": "Language deleted successfully"
}
```

## Déploiement

1. Uploadez les fichiers PHP sur votre serveur
2. Assurez-vous que le dossier `api/data/` est accessible en écriture
3. Mettez à jour l'URL de l'API dans `Activity.tsx`
4. Configurez les domaines CORS dans `config.php`
