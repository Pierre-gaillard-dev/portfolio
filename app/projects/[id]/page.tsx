'use client'
import React from "react"
import Link from "next/link"

import { getProject } from "@/src/projects.json"
import { notFound } from "next/navigation"

import "./main.css"
import "@/src/components/Project.css"

const ProjectDetail: React.FC<{ params: Promise<{ id: string }> }> = async ({
	params,
}) => {
	const id = (await params).id
	const project = getProject(id)

	if (!project) {
		notFound()
	}

	return (
		<div className="content projectDetail">
			<section id="hero" className="background_light">
				<div className="container">
					<Link href="/projects" className="back">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="feather feather-chevron-left"
						>
							<polyline points="15 18 9 12 15 6"></polyline>
						</svg>
						Retour
					</Link>
					<div className="split">
						<div>
							<h1>{project.title}</h1>
							<div className="split left languages">
								{project.languages.map((language, index) => {
									return (
										<p
											key={index}
											className={language.className}
										>
											{language.text}
										</p>
									)
								})}
							</div>
						</div>
						<a
							className="button white"
							href={project.githubLink}
							target="_blank"
						>
							<div className="image_container">
								<svg
									width="98"
									height="96"
									viewBox="0 0 98 96"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
										fill="#24292f"
									/>
								</svg>
							</div>
							<span>Github</span>
						</a>
					</div>
				</div>
			</section>
			{project.demoLink ? (
				<section id="demo" className="container">
					<iframe
						src={project.demoLink}
						width="100%"
						height={project.demoHeight}
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</section>
			) : null}
			{project.videoLink ? (
				<section id="video" className="container">
					<iframe
						src={project.videoLink}
						width="100%"
						height="100%"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</section>
			) : null}
			<section id="description" className="container">
				<h2>Description</h2>
				<p>{project.description}</p>
				<br style={{ height: "2rem" }} />
				<p>
					<span className="bold">Début du projet :</span>{" "}
					{project.startDate}
				</p>
				{project.endDate ? (
					<p>
						<span className="bold">Fin du projet :</span>{" "}
						{project.endDate}
					</p>
				) : null}
				<p>
					<span className="bold">Dur&eacute;e passée sur le projet :</span>{" "}
					{project.duration}
				</p>
			</section>
			<section id="conditions" className="container">
				<h2>Conditions</h2>
				<p>{project.conditions}</p>
			</section>
			<section id="droits" className="container">
				<h2>Droits d'auteur</h2>
				<p>{project.copyright}</p>
			</section>
		</div>
	)
}

export default ProjectDetail