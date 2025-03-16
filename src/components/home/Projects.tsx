"use client"
import React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

import Project from "../Project"
import Overlay from "../Overlay"
import ProjectDetail from "../projectDetail"
import { ChevronRight } from "../icons"

import type { Project as ProjectType } from "@/src/type"

import { getProject } from "@/src/projects.json"

import "./Projects.css"

const positions = ["left", "middle", "right"]

const Projects: React.FC = () => {
	const [index, setIndex] = useState<number>(0)
	const [sreenwidth, setScreenwidth] = useState<number | null>(null)
	const [overlayedProjectID, setOverlayedProjectID] = useState<string | null>(
		null
	)

	const ProjectsID = ["pokedex", "Netflix-clone", "thalia"]
	const projects: ProjectType[] = ProjectsID.map((id) => getProject(id)!)

	useEffect(() => {
		setIndex(0)
		const handleResize = () => {
			setScreenwidth(window.innerWidth)
		}
		window.onresize = () => {
			handleResize()
		}

		handleResize()

		return () => {
			window.onresize = null
		}
	}, [])

	const hoverHandler = (index: number) => {
		if (screen.width > 1300) {
			setIndex(index)
		}
	}

	/*Custom scroll*/
	let sleeping = false
	const sleep = () => {
		sleeping = true
		setTimeout(() => {
			sleeping = false
		}, 200)
	}
	const scrollHandler = (event: any) => {
		if (!sleeping && event.shiftKey && event.deltaY > 0) {
			setIndex((previous) => (previous + 1) % 3)
			sleep()
		} else if (!sleeping && event.shiftKey && event.deltaY < 0) {
			setIndex((previous) => (3 + previous - 1) % 3)
			sleep()
		}
	}

	let mouse_x = 0
	let dragging = false

	const touchStartHandler = (event: any) => {
		mouse_x = event.touches[0].clientX
		dragging = true
	}

	const touchMoveHandler = (event: any) => {
		if (dragging && !sleeping) {
			const diff = mouse_x - event.touches[0].clientX
			if (diff > 0) {
				setIndex((previous) => (previous + 1) % 3)
			} else {
				setIndex((previous) => (3 + previous - 1) % 3)
			}
			mouse_x = event.touches[0].clientX
			sleep()
		}
	}

	const touchEndHandler = (event: any) => {
		dragging = false
	}

	const handleclick = (id: string) => setOverlayedProjectID(id)

	const closeOverlay = () => setOverlayedProjectID(null)

	return (
		<section id="projects" className="container">
			<div className="split">
				<h2>Mes projets</h2>
				<Link href="/projects" id="projects_link">
					Tous mes projets
					<ChevronRight />
				</Link>
			</div>
			<div
				className="projects_container split"
				onWheel={scrollHandler}
				onTouchStart={touchStartHandler}
				onTouchMove={touchMoveHandler}
				onTouchEnd={touchEndHandler}
			>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1300) >= 1300
							? "left"
							: positions[+(4 - index) % 3]
					}
					title={projects[0].title}
					img={projects[0].img}
					description={projects[0].description}
					languages={projects[0].languages}
					selected={index === 0}
					onHover={() => hoverHandler(0)}
					onClick={() => handleclick(projects[0].id)}
				/>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1200) >= 1200
							? "middle"
							: positions[+(2 - index) % 3]
					}
					title={projects[1].title}
					img={projects[1].img}
					description={projects[1].description}
					languages={projects[1].languages}
					selected={index === 1}
					onHover={() => hoverHandler(1)}
					onClick={() => handleclick(projects[1].id)}
				/>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1200) >= 1200
							? "right"
							: positions[+(3 - index) % 3]
					}
					title={projects[2].title}
					img={projects[2].img}
					description={projects[2].description}
					languages={projects[2].languages}
					selected={index === 2}
					onHover={() => hoverHandler(2)}
					onClick={() => handleclick(projects[2].id)}
				/>
			</div>
			<div id="projects_link_bottom">
				<Link href="/projects">
					Tous mes projets
					<ChevronRight />
				</Link>
			</div>
			{overlayedProjectID && (
				<Overlay close={closeOverlay}>
					<ProjectDetail
						id={overlayedProjectID}
						close={closeOverlay}
					/>
				</Overlay>
			)}
		</section>
	)
}

export default Projects
