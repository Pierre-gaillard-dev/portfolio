"use client"
import React from "react"
import { useState, useEffect } from "react"

import Project from "../Project"

import "./Projects.css"

const positions = ["left", "middle", "right"]

const Projects: React.FC = () => {
	const [index, setIndex] = useState<number>(0)
	const [sreenwidth, setScreenwidth] = useState<number | null>(null)

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
		if (screen.width > 1200) {
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

	return (
		<section id="projects" className="container">
			<h2>Mes projets</h2>
			<div
				className="projects_container split"
				onWheel={scrollHandler}
				onTouchStart={touchStartHandler}
				onTouchMove={touchMoveHandler}
				onTouchEnd={touchEndHandler}
			>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1200) >= 1200
							? "left"
							: positions[+(4 - index) % 3]
					}
					title="Projet 1"
					img="../img/photo.png"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod"
					Languages={[
						{ text: "HTML/CSS", className: "html_css" },
						{ text: "JavaScript", className: "js" },
					]}
					selected={index === 0}
					onHover={() => hoverHandler(0)}
				/>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1200) >= 1200
							? "middle"
							: positions[+(2 - index) % 3]
					}
					title="Projet 2"
					img="../img/photo.png"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod"
					Languages={[
						{ text: "HTML/CSS", className: "html_css" },
						{ text: "React", className: "react" },
					]}
					selected={index === 1}
					onHover={() => hoverHandler(1)}
				/>
				<Project
					id={
						(sreenwidth ? sreenwidth : 1200) >= 1200
							? "right"
							: positions[+(3 - index) % 3]
					}
					title="Projet 3"
					img="../img/photo.png"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod"
					Languages={[
						{ text: "HTML/CSS", className: "html_css" },
						{ text: "React", className: "react" },
					]}
					selected={index === 2}
					onHover={() => hoverHandler(2)}
				/>
			</div>
		</section>
	)
}

export default Projects
