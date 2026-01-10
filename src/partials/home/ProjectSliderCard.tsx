'use client'

import type { CSSProperties, FC } from 'react'
import '@/styles/partials/home/ProjectSliderCard.css'
import type { Project } from '@/type'
import useBreakpoints from '@/hooks/useBreakpoints'
import ProjectCard from '@/components/ProjectCard'

const ProjectSliderCard: FC<{
  project: Project
  index: number
  currentIndex: number
  onClick?: (project: Project) => void
}> = ({ project, index, currentIndex, onClick }) => {
  const { isBelow } = useBreakpoints()

  const position = (index - currentIndex + 3) % 3
  let style: CSSProperties = {}
  if (isBelow('xl')) {
    // Calculates position of the card
    switch (Math.floor(position)) {
      case 0:
        style = {
          left: `${Math.floor(position * 50)}%`,
          transform: `translateX(-${Math.floor(position * 50)}%)`,
        }
        break
      case 1:
        style = {
          right: `${Math.floor((2 - position) * 50)}%`,
          transform: `translateX(${Math.floor((2 - position) * 50)}%)`,
        }
        break
      case 2:
        if (position < 2.5) {
          style = {
            right: `${Math.floor((position - 2) * 100)}%`,
            transform: `translateX(${Math.floor((position - 2) * 100)}%)`,
          }
        } else {
          style = {
            left: `${Math.floor((3 - position) * 100)}%`,
            transform: `translateX(-${Math.floor((3 - position) * 100)}%)`,
          }
        }
        break
    }
    if (position < 2) {
      const distance = Math.abs(position - 1)
      const scale = 1 + (0.1 - distance * 0.1)
      style.transform += ` scale(${scale})`
      style.zIndex = Math.round((1 - distance) * 100)
    }
  }

  const handleClick = () => {
    if (onClick) {
      onClick(project)
    }
  }

  return (
    <div className={`project-slider-card`} style={style} onClick={handleClick}>
      <ProjectCard
        id={project.id}
        title={project.title}
        description={project.description}
        img={project.img}
        languages={project.languages}
      />
    </div>
  )
}

export default ProjectSliderCard
