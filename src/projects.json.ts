import type { Project } from "@/.next/types/project"

export const getProject = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id)
}

export const projects: Project[] = [
	{
		id: "chess",
		title: "Chess",
		img: "../img/projects/chess.webp",
		languages: [
			{
				text: "HTML/CSS",
				className: "html_css",
			},
			{
				text: "JavaScript",
				className: "js",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/Chess",
		demoLink: "https://pierre-gaillard-dev.github.io/chess/",
		demoHeight: 450,
		demoWidth: null,
		videoLink: null,
		startDate: "14 août 2024",
		endDate: null,
		duration: "15h",
		description:
			"En tant que grand fan de jeux d'échecs, j'ai souhaité reproduire ce jeu, jouable en local. J'ai choisi de le faire en Javascript uniquement car je ne connissais que ce langage pour du web à ce moment.\nJe n'ai cependant pas inclus toutes les règles de jeu pour l'instant telles que la gestion du tour du joueur, les conditions de victoires ou les roques.",
		conditions:
			"J'ai développé ce jeu seul sur mon temps libre dans le but de développer mes compétences en javascript.\nJe n'ai que très peu utilisé d'IA sauf pour quelques corrections de bugs.",
		copyright: "Pierre Gaillard",
	},
	{
		id: "portfolio",
		title: "Portfolio",
		img: "../img/projects/portfolio.webp",
		languages: [
			{
				text: "typescript",
				className: "ts",
			},
			{
				text: "react",
				className: "react"
			},
			{
				text: "next.js",
				className: "next"
			}
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/portfolio",
		demoLink: null,
		demoHeight: null,
		demoWidth: null,
		videoLink: null,
		startDate: "24 septembre 2024",
		endDate: null,
		duration: "45h",
		description: "Ce portfolio est le site sur lequel vous êtes actuellement. C'est le plus gros projet web sur lequel j'ai travaillé jusqu'ici. il a pour but de refléter mes capacités de développeur et de montrer mes projets.\nC'est un réel défi pour moi car il m'a fallu créer la maquette dans un premier temps avec figma avant de pouvoir l'intégrer en code, tout en pensant à la manière de le rendre le plus dynamique possible.\nLe site est responsive et a pour but d'être régulièrement mis à jour afin d'évoluer en même temps que mes capacités.",
		conditions: "J'ai d'abord opté pour un site classique avec uniquement du HTML/CSS et Javascript car il ne s'agit que d'un petit site vitrine. J'ai cependant décidé de changer pour React, que j'apprenais en parallèle depuis quelques semaines, lorsque j'ai pensé à faire des pages de détail pour chacun de mes projets, puis à Next.js pour la navigation.\n\nPour ce projet, je me suis aidé de deux IA pour progresser plus rapidement :\n- Codeium pour la saisie semi-automatique du code\n- ChatGPT pour la résolution de problèmes",
		copyright: "Pierre Gaillard",
	},
	{
		id: "thalia",
		title: "Thalia's story",
		img: "../img/projects/thalia.webp",
		languages: [
			{
				text: "HTML/CSS",
				className: "html_css",
			},
			{
				text: "JavaScript",
				className: "js",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/Thalias-story/",
		demoLink: "https://pierre-gaillard-dev.github.io/Thalias-story/",
		demoHeight: null,
		demoWidth: 800,
		videoLink: null,
		startDate: "14 novmebre 2024",
		endDate: null,
		duration: "45h",
		description: "Thalia's story est un jeu vidéo de type visual novels. L'objectif est de progresser à travers des dialogues et des choix pour atteindre la fin du jeu.\nLe jeu est en cours de conception et n'a pas encore de version finale. De nombreux bugs sont présents et l'histoire n'est pas inclue. Il ne s'agit donc que d'une verision de test",
		conditions: "Ce jeu fait partie d'un projet de cours répartie sur 91h au cours de notre deuxième année, sans compter le temps le temps passé en dehors des cours.",
		copyright: "Nous sommes une équipe de 4 personnes passionnées de jeux vidéos :\n- Juliette Bellec : Chef de projet et directrice artistique\n- Pierre Gaillard : Développeur\n- Baptiste Dechamp : responsable marketing et communication\n- Raphael Launay : Réacteur et communication\n\nTous les visuels présents dans le jeu sont créés par Juliette Bellec et protégés par des droits d'auteurs.",
	},
	{
		id: "space-platformer",
		title: "Space Platformer",
		img: "../img/projects/space-platformer.webp",
		languages: [
			{
				text: "Python",
				className: "python",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/space-platformer",
		demoLink: null,
		demoHeight: 300,
		demoWidth: null,
		videoLink: "https://www.youtube.com/embed/gVuzaZ-OyX8?si=YRh9l9APlk-tS-t-",
		startDate: "14 novembre 2024",
		endDate: null,
		duration: "45h",
		description: "Space platformer est un jeu de plateforme créé en python en utilisant la librairie graphique pygame. ",
		conditions: "J'ai créé ce jeu pour un projet de cours en terminale avec la spécialité NSI. L'objectif était de créer un jeu vidéo de notre choix sans restrictons particulières.\nJ'ai créé ce jeu seul, sans utilisation d'intelligence artificielle, ainsi qu'un constructeur de cartes.\nLe système de cartes fonctionne avec un fichier csv où chaque nombre représente un type de blocs. Chaque type de bloc est associé à des propriétés pour définir sn interraction avec le joueur.\nLe jeu dispose d'un boss trouvable à la fin avec des mécaniques qui lui sont propres.",
		copyright: "Toutes les illustrations (sauf l'arrière-plan principal) ainsi que la musique ont été créées par Pierre Gaillard",
	}
]
