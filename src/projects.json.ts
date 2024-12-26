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
		videoLink: null,
		startDate: "14 août 2024",
		endDate: null,
		duration: "15h",
		description:
			"Ex irure qui eiusmod irure. Ipsum eiusmod quis est magna excepteur qui voluptate reprehenderit. Cupidatat do eiusmod commodo fugiat dolore. Ipsum deserunt consequat ipsum est.",
		conditions:
			"Est do aliqua proident est dolor non esse incididunt ad aliquip. Exercitation cupidatat veniam in aliquip est Lorem do. Id dolore dolor enim tempor aliqua est adipisicing laboris commodo. Nisi enim proident culpa dolore deserunt nulla nostrud officia aute reprehenderit exercitation nulla dolore. Deserunt cillum exercitation ad mollit id irure anim pariatur nulla magna id. Dolor ullamco aliquip exercitation cillum velit laborum amet nostrud dolor duis aute excepteur adipisicing. Laborum do officia aliquip nostrud quis cupidatat ex laborum tempor esse occaecat elit consequat nostrud.",
		copyright: "Pierre Gaillard",
	},
]
