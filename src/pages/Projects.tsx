import { FC, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import Project from "../components/Project"
import Overlay from "../components/Overlay"

import { projects } from "../projects.json"

import "./Projects.css"
import ProjectDetail from "../components/projectDetail"

const Projects: FC = () => {
  const [filters, setFilters] = useState<{
    [key: string]: { active: boolean; className: string }
  }>({})

  const [OverlayedProjectID, setOverlayedProjectID] = useState<string | null>(
    null
  )

  const activeFilters = () => {
    return Object.values(filters).some(filter => filter.active)
  }

  useEffect(() => {
    const newFilters: {
      [key: string]: { active: boolean; className: string }
    } = {}
    projects.forEach(project => {
      project.languages.forEach(language => {
        if (!newFilters[language.text]) {
          newFilters[language.text] = {
            active: false,
            className: language.className,
          }
        }
      })
    })
    setFilters(newFilters)
  }, [])

  const handleclick = (id: string) => {
    setOverlayedProjectID(id)
  }

  const handleclose = () => {
    setOverlayedProjectID(null)
  }

  return (
    <div className="content projects">
      <section id="hero" className="background_light">
        <h1>Mes projets</h1>
      </section>
      <section id="projects" className="container">
        <div className="filter languages">
          {Object.keys(filters).map(filter => {
            return (
              <a
                key={filter}
                onClick={() =>
                  setFilters(filters => ({
                    ...filters,
                    [filter]: {
                      active: !filters[filter].active,
                      className: filters[filter].className,
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
        <AnimatePresence>
          <div className="projectList">
            {projects.map(project => {
              if (!filters[project.languages[0].text]) return
              if (
                !project.languages.some(
                  language => filters[language.text].active
                ) &&
                activeFilters()
              ) {
                return
              }
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
                  <Project
                    id={project.id}
                    title={project.title}
                    img={project.img}
                    description={project.description}
                    languages={project.languages}
                    onClick={() => handleclick(project.id)}
                  />
                </motion.div>
              )
            })}
          </div>
        </AnimatePresence>
        {OverlayedProjectID && (
          <Overlay close={handleclose}>
            <ProjectDetail id={OverlayedProjectID} close={handleclose} />
          </Overlay>
        )}
      </section>
    </div>
  )
}

export default Projects
