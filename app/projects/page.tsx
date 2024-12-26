"use client"
import React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

import Project from "@/src/components/Project"

import { projects } from "@/src/projects.json"

import "./main.css"

const Projects: React.FC = () => {
	const [filters, setFilters] = useState<{
		[key: string]: { active: boolean; className: string }
	}>({})

    useEffect(() => {
        const newFilters: {
            [key: string]: { active: boolean; className: string }
        } = {}
        projects.forEach((project) => {
            project.languages.forEach((language) => {
                if (!newFilters[language.text]) {
                    newFilters[language.text] = {
                        active: true,
                        className: language.className,
                    }
                }
            })
        })
        setFilters(newFilters)
    }, [])

	return (
		<div className="content projects">
			<section id="hero" className="background_light">
				<h1>Mes projets</h1>
			</section>
			<section id="projects" className="container">
				<div className="filter languages">
					{Object.keys(filters).map((filter) => {
						return (
							<a
								key={filter}
								onClick={() =>
									setFilters((filters) => ({
										...filters,
										[filter]: {
											active: !filters[filter].active,
											className:
												filters[filter].className,
										},
									}))
								}
								className={
									filters[filter].active
										? `${filters[filter].className} selected`
										: filters[filter].className
								}
							>
								{filter}
							</a>
						)
					})}
				</div>
				<div className="projectList">
					{projects.map((project) => {
                        if (!filters[project.languages[0].text]) return
						if (
							!project.languages.some(
								(language) => filters[language.text].active
							)
						) {
							return
						}
						return (
							<Link
								href={`/projects/${project.id}`}
								key={project.id}
							>
								<Project
									id={project.id}
									title={project.title}
									img={project.img}
									description={project.description}
									Languages={project.languages}
								/>
							</Link>
						)
					})}
				</div>
			</section>
		</div>
	)
}

export default Projects
