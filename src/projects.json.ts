import type { Project } from "@/src/type"

export const getProject = (id: string): Project | undefined => {
	return projects.find((project) => project.id === id)
}

export const getProjectByFolderName = (
	folderName: string
): Project | undefined => {
	return projects.find((project) => {
		const thisForlerName =
			project.githubLink.split("/")[
				project.githubLink.split("/").length - 1
			]
		console.log(folderName, thisForlerName)
		return thisForlerName === folderName
	})
}

export const projects: Project[] = [
	{
		id: "Netflix-clone",
		title: "Netflix clone",
		img: "../img/projects/netflix.webp",
		languages: [
			{
				text: "React",
				className: "react",
			},
			{
				text: "Express",
				className: "express",
			},
			{
				text: "PostgreSQL",
				className: "postgres",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/Netflix",
		demoLink: "https://netflix.pierre-gaillard.mds-vannes.yt",
		demoHeight: 450,
		demoWidth: null,
		videoLink: null,
		startDate: "14 janvier 2025",
		endDate: null,
		duration: "80h",
		description:
			"Netflix est mon premier projet full-stack. J'ai fait le choix de gérer de A à Z le fonctionnement du site web, pour ne pas être dépendant de services tels que TheMovieDatabase et surtout pour apprendre à créer une API ett à gérer une base de données.\nLe site est un clone de Netflix, avec une page d'accueil, une page de détail pour chaque film et une page de connexion.\nJe gère moi-même les connexions au site avec les données stockées dans la base de données avec le mot de passe hashé. Il est cependant déconseillé de créer un compte avec un mot de passe que vous utilisez ailleurs, car je ne suis pas un expert en sécurité informatique.",
		conditions:
			"Ce projet fait partie de mon cursus scolaire en deuxième année de Bachelor. Il a été réalisé en environ 80h, réparties sur 3 mois, dont la moitié sur mon temps personnel.",
		copyright:
			"J'ai réalisé ce projet seul. Toutes les données et les images proviennent de TheMovieDatabase, en respectant leues conditions d'utilisation.",
	},
	{
		id: "pokedex",
		title: "Pokedex",
		img: "../img/projects/pokedex.webp",
		languages: [
			{
				text: "React",
				className: "react",
			},
			{
				text: "Express",
				className: "express",
			},
			{
				text: "PostgreSQL",
				className: "postgres",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/pokedex",
		demoLink: "https://pokedex.pierre-gaillard.mds-vannes.yt",
		demoHeight: null,
		demoWidth: null,
		aspectRatio: 16 / 9,
		videoLink: null,
		startDate: "11 février 2025",
		endDate: null,
		duration: "25h",
		description:
			"J'ai souhaité créer un pokédex pour prendre une revanche sur un échec précédent.\nJ'ai essayé d'apprendre à créer un site web avec une base de données en suivant un tutoriel de 7h permettant de créer un pokédex. J'avais passé plus de 20h à suivre ce tutoriel pour me retrouver au final avec quelque chose de fonctionnel dont je ne savais pas quoi faire.\nJe ne le savais pas mais ce tutoriel n'apprenait qu'à créer une API et pas un site complet.\nJ'ai donc décidé de recommencer ce projet, 2 ans après, en partant de zéro mais en gardant les mêmes technologies. Suele le type de base de données a changé, passant de mariaDB à PostgreSQL.\nCette nouvelle version est à la fois plus copmplète (Types de pokémons mieux gérés dans la base de données et il y a des liens entre les pokémons pour les évolutions) et plus facilement utilisable (displonible en ligne depuis un site plutôt que via des requêtes HTTP en local).",
		conditions:
			"Ce projet a été réalisé à la suite de mon projet Netflix, en 25h seulement. Il a été beaucoup plus rapide à réaliser car il utilise les mêmes technologies que j'avais appris pendant le projet Netflix.\nIl a été réalisé entièrement sur mon temps libre, mais pour un projet demandé par mon école.\nJe me suis aidé de chatGPT pour me débloquer uniquement, et de Github Copilot pour la saisie semi-automatique du code.",
		copyright:
			"J'ai réalisé ce projet seul. Les données des pokémons proviennent de pokebuildapi.fr car il me permettait de récupérer les données en français avec toutes les informations dont j'avais besoin.",
	},
	{
		id: "gipoulet",
		title: "Gipoulet",
		img: "../img/projects/gipoulet.webp",
		languages: [
			{
				text: "Godot",
				className: "godot",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/Gipoulet",
		demoLink: "https://itch.io/embed-upload/12743416?color=333333",
		demoHeight: 668,
		demoWidth: 1152,
		videoLink: null,
		startDate: "1 mars 2023",
		endDate: null,
		duration: "3h",
		description:
			"Gipoulet est un jeu d'action, où le joueur incarne un formateur de My Digital School qui doit arriver à l'heure en cours tout en esquivant une pluie de poulets volants et en attrapant des poussins pour gagner du temps.\nIl explore un monde rempli d'obstacles inattendus, de bonus à saisir, et de poulets qui te ralentissent.\nCourir n'a jamais été aussi palpitant : chaque décision compte, car le temps est son ennemi. Le joueur utilisera alors ses réflexes et son intelligence pour éviter les poulets et profiter des poussins rares. Arrivera-t-il à l’heure pour éviter la colère de sa responsable pédagogique ?",
		conditions:
			"Ce jeu fait parti de la Game Jam 2025 organisée par MyDigitalSchool. Le projet a été sélectionné par le jury de Vannes pour concourrir contre les autres écoles de France.\nL'objectif de la Game Jam était de créer un jeu vidéo en une semaine sur le thème de l'adaptation.",
		copyright:
			"Développement et intégration :\n - Pierre Gaillard\nDesign :\n - Alice FONTAINE\n - Maïna KONG A SIOU\n - Elisa LOUISOR\nMarketing et sound design :\n - Satine RUBENS\n - Maïwenn LOPIN",
	},
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
				className: "react",
			},
			{
				text: "next.js",
				className: "next",
			},
		],
		githubLink: "https://github.com/Pierre-gaillard-dev/portfolio",
		demoLink: null,
		demoHeight: null,
		demoWidth: null,
		videoLink: null,
		startDate: "24 septembre 2024",
		endDate: null,
		duration: "45h",
		description:
			"Ce portfolio est le site sur lequel vous êtes actuellement. C'était le plus gros projet web sur lequel j'avais travaillé au moment de sa création. il a pour but de refléter mes capacités de développeur et de montrer mes projets.\nC'est un réel défi pour moi car il m'a fallu créer la maquette dans un premier temps avec figma avant de pouvoir l'intégrer en code, tout en pensant à la manière de le rendre le plus dynamique possible.\nLe site est responsive et a pour but d'être régulièrement mis à jour afin d'évoluer en même temps que mes capacités.",
		conditions:
			"J'ai d'abord opté pour un site classique avec uniquement du HTML/CSS et Javascript car il ne s'agit que d'un petit site vitrine. J'ai cependant décidé de changer pour React, que j'apprenais en parallèle depuis quelques semaines, lorsque j'ai pensé à faire des pages de détail pour chacun de mes projets, puis à Next.js pour la navigation.\n\nPour ce projet, je me suis aidé de deux IA pour progresser plus rapidement :\n- Codeium pour la saisie semi-automatique du code\n- ChatGPT pour la résolution de problèmes",
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
		description:
			"Thalia's story est un jeu vidéo de type visual novels. L'objectif est de progresser à travers des dialogues et des choix pour atteindre la fin du jeu.\nLe jeu est en cours de conception et n'a pas encore de version finale. De nombreux bugs sont présents et l'histoire n'est pas inclue. Il ne s'agit donc que d'une verision de test",
		conditions:
			"Ce jeu fait partie d'un projet de cours réparti sur 91h au cours de notre deuxième année, sans compter le temps passé en dehors des cours.",
		copyright:
			"Nous sommes une équipe de 4 personnes passionnées de jeux vidéos :\n- Juliette Bellec : Chef de projet et directrice artistique\n- Pierre Gaillard : Développeur\n- Baptiste Dechamp : responsable marketing et communication\n- Raphael Launay : Réacteur et communication\n\nTous les visuels présents dans le jeu sont créés par Juliette Bellec et protégés par des droits d'auteurs.",
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
		videoLink:
			"https://www.youtube.com/embed/gVuzaZ-OyX8?si=YRh9l9APlk-tS-t-",
		startDate: "14 novembre 2024",
		endDate: null,
		duration: "45h",
		description:
			"Space platformer est un jeu de plateforme créé en python en utilisant la librairie graphique pygame. ",
		conditions:
			"J'ai créé ce jeu pour un projet de cours en terminale avec la spécialité NSI. L'objectif était de créer un jeu vidéo de notre choix sans restrictons particulières.\nJ'ai créé ce jeu seul, sans utilisation d'intelligence artificielle, ainsi qu'un constructeur de cartes.\nLe système de cartes fonctionne avec un fichier csv où chaque nombre représente un type de blocs. Chaque type de bloc est associé à des propriétés pour définir sn interraction avec le joueur.\nLe jeu dispose d'un boss trouvable à la fin avec des mécaniques qui lui sont propres.",
		copyright:
			"Toutes les illustrations (sauf l'arrière-plan principal) ainsi que la musique ont été créées par Pierre Gaillard",
	},
]
