import { useState, useEffect, FC, useRef } from "react"

import { ChevronRight } from "../../../components/icons"

import type { Project as ProjectType } from "@/src/type"

import "./Projects.css"
import projectService from "@/src/services/projects"
import ProjectSliderCard from "./ProjectSliderCard"

const Projects: FC = () => {
  const service = projectService.getInstance()

  const containerRef = useRef<HTMLDivElement>(null)
  const isPointerDown = useRef<boolean>(false)
  const pointerPosition = useRef<number>(0)

  const [projects, setProjects] = useState<ProjectType[]>([])

  const [windowWidth, setWindowWidth] = useState<number>(0)
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    service
      .getProjects()
      .then(data => {
        setProjects(data.splice(0, 3))
      })
      .catch(error => {
        console.error("Error fetching projects:", error)
      })

    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    pointerPosition.current = e.clientX
    isPointerDown.current = true
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (!isPointerDown.current) return
    const delta = (e.clientX - pointerPosition.current) / 360
    // Do something with the delta
    setIndex(prevIndex => {
      return (prevIndex + 3 - delta) % 3
    })
    pointerPosition.current = e.clientX
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault()
    isPointerDown.current = false
    pointerPosition.current = 0
    setIndex(prevIndex => {
      return Math.round(prevIndex)
    })
  }

  return (
    <section id="projects" className="container">
      <div className="split">
        <h2>Mes projets</h2>
        <a href="/projects" id="projects_link">
          Tous mes projets
          <ChevronRight />
        </a>
      </div>
      <div
        className="projects_container" // split"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div className="wrapper">
          {projects.map((project, position) => (
            <ProjectSliderCard
              key={project.id}
              project={project}
              index={position}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
      <div id="projects_link_bottom">
        <a href="/projects">
          Tous mes projets
          <ChevronRight />
        </a>
      </div>
    </section>
  )
}

export default Projects
