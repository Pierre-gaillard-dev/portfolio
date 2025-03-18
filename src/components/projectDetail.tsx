// React
import React from "react"
import { notFound } from "next/navigation"
// components
import { ChevronLeft, ExternalLink, Github } from "@/src/components/icons"
import Button from "@/src/components/Button"
// types
import type { Project, language } from "@/src/type"
// data
import { getProject } from "@/src/projects.json"
// css
import "@/src/components/css/ProjectDetail.css"
import "@/src/components/css/Project.css"

export const getIframe = (project: Project, ref: React.RefObject<any>) => {
	const url = project.demoLink
	if (!url) return <div>Demo not found</div>

	//github
	if (url.startsWith("https://github.com/")) {
		return (
			<iframe
				src={url}
				width={"100%"}
				height={"100%"}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
				ref={ref}
			></iframe>
		)
	}

	//itch.io
	if (url.includes("itch.io")) {
		return (
			<iframe
				frameBorder="0"
				src={url}
				allowFullScreen
				width={"100%"}
				height={"100%"}
				ref={ref}
			>
				<a href="https://pierre-gaillard-dev.itch.io/gipoulet">
					Play Gipoulet on itch.io
				</a>
			</iframe>
		)
	}

	return (
		<iframe
			src={url}
			width={"100%"}
			height={"100%"}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			ref={ref}
		></iframe>
	)
}

const ProjectDetail: React.FC<{ id: string; close: () => void }> = ({
	id,
	close,
}) => {
	const project = getProject(id)

	if (!project) {
		notFound()
	}

	const iframeRef = React.useRef<HTMLIFrameElement>(null)

	const formatText = (text: string) => {
		let result = text.split("\n").map((line, index) => {
			if (line !== "") {
				return <p key={index}>{line}</p>
			} else {
				return <br key={index} />
			}
		})
		return result
	}

	return (
		<div className="content projectDetail">
			<section id="hero" className="background_light">
				<div className="container">
					<a onClick={close} className="back">
						<ChevronLeft />
						Retour
					</a>
					<div className="split">
						<div>
							<h2>{project.title}</h2>
							<div className="split left languages">
								{project.languages.map(
									(language: language, index) => {
										return (
											<p
												key={index}
												className={language.className}
											>
												{language.text}
											</p>
										)
									}
								)}
							</div>
						</div>
						<div className="split links">
							<Button link={project.githubLink} color="white">
								<Github />
								<span>Github</span>
							</Button>
							{project.demoLink ? (
								<Button link={project.demoLink} color="white">
									<ExternalLink />
									<span>Demo</span>
								</Button>
							) : null}
						</div>
					</div>
				</div>
			</section>
			{project.demoLink && project.playableDemo ? (
				<section id="demo" className="container">
					<h2>Testez-le</h2>
					<div
						className="center"
						style={{
							width: project.demoWidth || "100%",
							height:
								project.demoHeight ||
								(iframeRef.current?.clientWidth || 600) /
									(project.aspectRatio || 16 / 9),
						}}
					>
						{getIframe(project, iframeRef)}
						<a
							className="full-screen"
							href={project.demoLink}
							target="_blank"
						>
							<ExternalLink />
						</a>
					</div>
				</section>
			) : null}
			{project.videoLink ? (
				<section id="video" className="container">
					<h2>démonstration</h2>
					<div className="center">
						<iframe
							width={project.demoWidth || "530px"}
							height={project.demoHeight || "300px"}
							src={project.videoLink}
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
				</section>
			) : null}
			{(!project.demoLink && !project.videoLink) ||
			!project.playableDemo ? (
				<section id="image" className="container">
					<img src={project.img} alt={project.title} />
				</section>
			) : null}
			<section id="description" className="container">
				<h2>Description</h2>
				{formatText(project.description)}
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
					<span className="bold">
						Dur&eacute;e passée sur le projet :
					</span>{" "}
					{project.duration}
				</p>
			</section>
			<section id="conditions" className="container">
				<h2>Conditions</h2>
				{formatText(project.conditions)}
			</section>
			<section id="droits" className="container">
				<h2>Droits d'auteur</h2>
				{formatText(project.copyright)}
			</section>
		</div>
	)
}

export default ProjectDetail
