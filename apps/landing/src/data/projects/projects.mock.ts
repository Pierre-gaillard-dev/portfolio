// Donnée temporaire pour la conception visuelle du site
import type { Project } from './projects.schemas'

export const mockProjects: Project[] = [
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/netflix.webp',
    github_url: 'https://github.com/Pierre-gaillard-dev/Netflix',
    stacks: [
      { title: 'JavaScript', slug: 'javascript', color: '#F7DF1E' },
      { title: 'TypeScript', slug: 'typescript', color: '#3178C6' },
      { title: 'React', slug: 'react', color: '#61DAFB' },
    ],
    translation: new Map([
      [
        'fr',
        {
          title: 'Netflix clone',
          slug: 'netflix-clone',
          meta_title: 'Netflix clone',
          meta_description: 'Netflix est mon premier projet full-stack.',
          blocs: [
            {
              title: 'Démo',
              content: '',
              integration_url: 'https://netflix-two-olive-11.vercel.app',
              position: '1',
              kind: 'demo',
            },
            {
              title: 'Présentation',
              content: `![Netflix clone](https://pierral.cluster100.hosting.ovh.net/img/projects/netflix.webp)

Netflix est mon premier projet full-stack. J'ai fait le choix de gérer de A à Z le fonctionnement du site web, pour ne pas être dépendant de services tels que TheMovieDatabase et surtout pour apprendre à créer une API ett à gérer une base de données.

Le site est un clone de Netflix, avec une page d'accueil, une page de détail pour chaque film et une page de connexion.

Je gère moi-même les connexions au site avec les données stockées dans la base de données avec le mot de passe hashé. Il est cependant déconseillé de créer un compte avec un mot de passe que vous utilisez ailleurs, car je ne suis pas un expert en sécurité informatique.`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content:
                'Ce projet fait partie de mon cursus scolaire en deuxième année de Bachelor. Il a été réalisé en environ 100h, réparties sur 3 mois, dont la moitié sur mon temps personnel.',
              position: '3',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content:
                "J'ai réalisé ce projet seul. Toutes les données et les images proviennent de TheMovieDatabase, en respectant leurs conditions d'utilisation.",
              position: '4',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/pokedex.webp',
    github_url: 'https://github.com/Pierre-gaillard-dev/pokedex',
    stacks: [{ title: 'JavaScript', slug: 'javascript', color: '#F7DF1E' }],
    translation: new Map([
      [
        'fr',
        {
          title: 'Pokedex',
          slug: 'pokedex',
          meta_title: 'Pokedex',
          meta_description:
            "J'ai souhaité créer un pokédex pour prendre une revanche sur un échec précédent.",
          blocs: [
            {
              title: 'Démo',
              content: '',
              integration_url: 'https://pokedex.pierre-gaillard.mds-vannes.yt',
              position: '1',
              kind: 'demo',
            },
            {
              title: 'Présentation',
              content: `![Pokedex](https://pierral.cluster100.hosting.ovh.net/img/projects/pokedex.webp)

J'ai souhaité créer un pokédex pour prendre une revanche sur un échec précédent.

J'ai essayé d'apprendre à créer un site web avec une base de données en suivant un tutoriel de 7h permettant de créer un pokédex. J'avais passé plus de 20h à suivre ce tutoriel pour me retrouver au final avec quelque chose de fonctionnel dont je ne savais pas quoi faire.

J'ai donc décidé de recommencer ce projet, 2 ans après, en partant de zéro mais en gardant les mêmes technologies. Suele le type de base de données a changé, passant de mariaDB à PostgreSQL.

Cette nouvelle version est à la fois plus copmplète (Types de pokémons mieux gérés dans la base de données et il y a des liens entre les pokémons pour les évolutions) et plus facilement utilisable (displonible en ligne depuis un site plutôt que via des requêtes HTTP en local).`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content: `Ce projet a été réalisé à la suite de mon projet Netflix, en 25h seulement. Il a été beaucoup plus rapide à réaliser car il utilise les mêmes technologies que j'avais appris pendant le projet Netflix.

Il a été réalisé entièrement sur mon temps libre, mais pour un projet demandé par mon école.

Je me suis aidé de chatGPT pour me débloquer uniquement, et de Github Copilot pour la saisie semi-automatique du code.`,
              position: '3',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content:
                "J'ai réalisé ce projet seul. Les données des pokémons proviennent de pokebuildapi.fr car il me permettait de récupérer les données en français avec toutes les informations dont j'avais besoin.",
              position: '4',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/gipoulet.webp',
    github_url: 'https://github.com/Pierre-gaillard-dev/Gipoulet',
    stacks: [{ title: 'Godot', slug: 'godot', color: '#478CBF' }],
    translation: new Map([
      [
        'fr',
        {
          title: 'Gipoulet',
          slug: 'gipoulet',
          meta_title: 'Gipoulet',
          meta_description:
            "Gipoulet est un jeu d'action, où le joueur incarne un formateur de My Digital School qui doit arriver à l'heure en cours tout en esquivant une pluie de poulets volants et en attrapant des poussins pour gagner du temps.",
          blocs: [
            {
              title: 'Démo',
              content: '',
              integration_url:
                'https://itch.io/embed-upload/12743416?color=333333',
              position: '1',
              kind: 'demo',
            },
            {
              title: 'Présentation',
              content: `![Gipoulet](https://pierral.cluster100.hosting.ovh.net/img/projects/gipoulet.webp)

Gipoulet est un jeu d'action, où le joueur incarne un formateur de My Digital School qui doit arriver à l'heure en cours tout en esquivant une pluie de poulets volants et en attrapant des poussins pour gagner du temps.

Il explore un monde rempli d'obstacles inattendus, de bonus à saisir, et de poulets qui te ralentissent.

Courir n'a jamais été aussi palpitant : chaque décision compte, car le temps est son ennemi. Le joueur utilisera alors ses réflexes et son intelligence pour éviter les poulets et profiter des poussins rares. Arrivera-t-il à l’heure pour éviter la colère de sa responsable pédagogique ?`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content: `Ce jeu fait parti de la Game Jam 2025 organisée par MyDigitalSchool. Le projet a été sélectionné par le jury de Vannes pour concourrir contre les autres écoles de France.

L'objectif de la Game Jam était de créer un jeu vidéo en une semaine sur le thème de l'adaptation.`,
              position: '3',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content: `Développement et intégration :

- Pierre Gaillard

Design :

- Alice FONTAINE
- Maïna KONG A SIOU
- Elisa LOUISOR

Marketing et sound design :

- Satine RUBENS
- Maïwenn LOPIN`,
              position: '4',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/chess.webp',
    github_url: 'https://github.com/Pierre-gaillard-dev/Chess',
    stacks: [{ title: 'JavaScript', slug: 'javascript', color: '#F7DF1E' }],
    translation: new Map([
      [
        'fr',
        {
          title: 'Chess',
          slug: 'chess',
          meta_title: 'Chess',
          meta_description:
            "En tant que grand fan de jeux d'échecs, j'ai souhaité reproduire ce jeu, jouable en local.",
          blocs: [
            {
              title: 'Démo',
              content: '',
              integration_url: 'https://pierre-gaillard-dev.github.io/chess/',
              position: '1',
              kind: 'demo',
            },
            {
              title: 'Présentation',
              content: `![Chess](https://pierral.cluster100.hosting.ovh.net/img/projects/chess.webp)

En tant que grand fan de jeux d'échecs, j'ai souhaité reproduire ce jeu, jouable en local. J'ai choisi de le faire en Javascript uniquement car je ne connissais que ce langage pour du web à ce moment.

Je n'ai cependant pas inclus toutes les règles de jeu pour l'instant telles que la gestion du tour du joueur, les conditions de victoires ou les roques.`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content: `J'ai développé ce jeu seul sur mon temps libre dans le but de développer mes compétences en javascript.

Je n'ai que très peu utilisé d'IA sauf pour quelques corrections de bugs.`,
              position: '3',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content: 'Pierre Gaillard',
              position: '4',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/portfolio.webp',
    github_url: 'https://github.com/Pierre-gaillard-dev/portfolio',
    stacks: [
      { title: 'TypeScript', slug: 'typescript', color: '#3178C6' },
      { title: 'React', slug: 'react', color: '#61DAFB' },
      { title: 'Next.js', slug: 'next-js', color: '#000000' },
      { title: 'Python', slug: 'python', color: '#3776AB' },
    ],
    translation: new Map([
      [
        'fr',
        {
          title: 'Portfolio',
          slug: 'portfolio',
          meta_title: 'Portfolio',
          meta_description:
            'Ce portfolio est le site sur lequel vous êtes actuellement.',
          blocs: [
            {
              title: 'Présentation',
              content: `![Portfolio](https://pierral.cluster100.hosting.ovh.net/img/projects/portfolio.webp)

Ce portfolio est le site sur lequel vous êtes actuellement. C'était le plus gros projet web sur lequel j'avais travaillé au moment de sa création. il a pour but de refléter mes capacités de développeur et de montrer mes projets.

C'est un réel défi pour moi car il m'a fallu créer la maquette dans un premier temps avec figma avant de pouvoir l'intégrer en code, tout en pensant à la manière de le rendre le plus dynamique possible.

Le site est responsive et a pour but d'être régulièrement mis à jour afin d'évoluer en même temps que mes capacités.`,
              position: '1',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content: `J'ai d'abord opté pour un site classique avec uniquement du HTML/CSS et Javascript car il ne s'agit que d'un petit site vitrine. J'ai cependant décidé de changer pour React, que j'apprenais en parallèle depuis quelques semaines, lorsque j'ai pensé à faire des pages de détail pour chacun de mes projets, puis à Next.js pour la navigation.

Pour ce projet, je me suis aidé de deux IA pour progresser plus rapidement :

- Codeium pour la saisie semi-automatique du code
- ChatGPT pour la résolution de problèmes`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content: 'Pierre Gaillard',
              position: '3',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
  {
    cover_url:
      'https://pierral.cluster100.hosting.ovh.net/img/projects/space-platformer',
    github_url: 'https://github.com/Pierre-gaillard-dev/space-platformer',
    stacks: [{ title: 'Python', slug: 'python', color: '#3776AB' }],
    translation: new Map([
      [
        'fr',
        {
          title: 'Space Platformer',
          slug: 'space-platformer',
          meta_title: 'Space Platformer',
          meta_description:
            'Space platformer est un jeu de plateforme créé en python en utilisant la librairie graphique pygame.',
          blocs: [
            {
              title: 'Vidéo',
              content: '',
              integration_url:
                'https://www.youtube.com/embed/gVuzaZ-OyX8?si=YRh9l9APlk-tS-t-',
              position: '1',
              kind: 'video',
            },
            {
              title: 'Présentation',
              content: `![Space Platformer](https://pierral.cluster100.hosting.ovh.net/img/projects/space-platformer)

Space platformer est un jeu de plateforme créé en python en utilisant la librairie graphique pygame.`,
              position: '2',
              kind: 'text',
            },
            {
              title: 'Contexte',
              content: `J'ai créé ce jeu pour un projet de cours en terminale avec la spécialité NSI. L'objectif était de créer un jeu vidéo de notre choix sans restrictons particulières.

J'ai créé ce jeu seul, sans utilisation d'intelligence artificielle, ainsi qu'un constructeur de cartes.

Le système de cartes fonctionne avec un fichier csv où chaque nombre représente un type de blocs. Chaque type de bloc est associé à des propriétés pour définir sn interraction avec le joueur.`,
              position: '3',
              kind: 'text',
            },
            {
              title: 'Crédits',
              content:
                "Toutes les illustrations (sauf l'arrière-plan principal) ainsi que la musique ont été créées par Pierre Gaillard",
              position: '4',
              kind: 'text',
            },
          ],
        },
      ],
    ]),
  },
]
