'use client'

import { FC, useEffect, useState } from 'react'
import projectsService from '@/services/projects'
import { Project, Language } from '@/type'
import Overlay from '@/components/ui/Overlay'
import ProjectCard from '@/components/ProjectCard'
import ProjectCardSkeleton from '@/components/ProjectCardSkeleton'
import ProjectDetail from '@/components/projectDetail'

interface ProjectListProps {
  initialProjects?: Project[]
}

const ProjectList: FC<ProjectListProps> = ({ initialProjects = [] }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [activeLanguages, setActiveLanguages] = useState<string[]>([])

  const [OverlayedProject, setOverlayedProject] = useState<Project | null>(null)

  useEffect(() => {
    projectsService
      .getProjects()
      .then((projects) => {
        console.log(projects)
        if (projects.length === 0) {
          setIsLoading(false)
          return
        }
        setProjects(projects)
        const newLanguages: Language[] = []
        projects.forEach((project: Project) => {
          project.languages?.forEach((lang) => {
            if (!newLanguages.some((l) => l.slug === lang.slug)) {
              newLanguages.push(lang)
            }
          })
        })
        setLanguages(newLanguages)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching projects:', error)
      })
  }, [])

  useEffect(() => {
    if (activeLanguages.length === 0) {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter((project) =>
        project.languages?.some((lang) => activeLanguages.includes(lang.slug))
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
    setActiveLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((lang) => lang !== language)
        : [...prev, language]
    )
  }
  return (
    <>
      <div className='filter languages'>
        {languages.map((lang) => {
          return (
            <a
              key={lang.slug}
              onClick={() => handleFilterChange(lang.slug)}
              className={
                lang.slug +
                (activeLanguages.includes(lang.slug) ? ' selected' : '')
              }
            >
              {lang.name}
            </a>
          )
        })}
      </div>
      <div className='projectList'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                img={project.img}
                description={project.description}
                languages={project.languages}
                onClick={() => handleclick(project)}
              />
            )
          })
        ) : isLoading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          ))
        ) : (
          <p>Aucun projet trouvé.</p>
        )}
      </div>
      {OverlayedProject && (
        <Overlay close={handleclose}>
          <ProjectDetail project={OverlayedProject} onClose={handleclose} />
        </Overlay>
      )}
    </>
  )
}

export default ProjectList
