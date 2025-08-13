import { FC, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import ProjectCard from "../components/ProjectCard"
import Overlay from "../components/Overlay"
import ProjectDetail from "../components/projectDetail"
import ProjectCardSkeleton from "../components/ProjectCardSkeleton"

import projectService from "../services/projects"

import { language, Project } from "../type"

import "./Projects.css"

const Projects: FC = () => {
  const service = projectService.getInstance()

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [languages, setLanguages] = useState<language[]>([])
  const [activeLanguages, setActiveLanguages] = useState<string[]>([])

  const [OverlayedProject, setOverlayedProject] = useState<Project | null>(null)

  useEffect(() => {
    service
      .getProjects()
      .then(projects => {
        setProjects(projects)
        const newLanguages: language[] = []
        projects.forEach(project => {
          project.languages?.forEach(lang => {
            if (!newLanguages.some(l => l.slug === lang.slug)) {
              newLanguages.push(lang)
            }
          })
        })
        setLanguages(newLanguages)
        setIsLoading(false)
      })
      .catch(error => {
        console.error("Error fetching projects:", error)
      })
  }, [])

  useEffect(() => {
    if (activeLanguages.length === 0) {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(project =>
        project.languages?.some(lang => activeLanguages.includes(lang.slug))
      )
      setFilteredProjects(filtered)
    }
  }, [projects, activeLanguages])

  const handleclick = (project: Project) => {
    setOverlayedProject(project)
  }

  const handleclose = () => {
    setOverlayedProject(null)
  }

  const handleFilterChange = (language: string) => {
    setActiveLanguages(prev =>
      prev.includes(language)
        ? prev.filter(lang => lang !== language)
        : [...prev, language]
    )
  }

  return (
    <div className="content projects">
      <section id="hero" className="background_light">
        <h1>Mes projets</h1>
      </section>
      <section id="projects" className="container">
        <div className="filter languages">
          {languages.map(lang => {
            return (
              <a
                key={lang.slug}
                onClick={() => handleFilterChange(lang.slug)}
                className={
                  lang.slug +
                  (activeLanguages.includes(lang.slug) ? " selected" : "")
                }
              >
                {lang.name}
              </a>
            )
          })}
        </div>
        <AnimatePresence>
          <div className="projectList">
            {filteredProjects.length > 0 ? (
              filteredProjects.map(project => {
                return (
                  <motion.div
                    className="grid-item"
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      img={project.img}
                      description={project.description}
                      languages={project.languages}
                      onClick={() => handleclick(project)}
                    />
                  </motion.div>
                )
              })
            ) : isLoading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  className="grid-item"
                  key={index}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCardSkeleton />
                </motion.div>
              ))
            ) : (
              <p>Aucun projet trouvé.</p>
            )}
          </div>
        </AnimatePresence>
        {OverlayedProject && (
          <Overlay close={handleclose}>
            <ProjectDetail project={OverlayedProject} onClose={handleclose} />
          </Overlay>
        )}
      </section>
    </div>
  )
}

export default Projects
