import { FC } from "react"
import ProjectCard from "@/src/components/ProjectCard"
import type { Project } from "@/src/type"
import "./ProjectSliderCard.css"

const ProjectSliderCard: FC<{
  project: Project
  index: number
  currentIndex: number
}> = ({ project, index, currentIndex }) => {
  const position = (index - currentIndex + 3) % 3

  let style: React.CSSProperties = {}

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

  return (
    <div className={`project-slider-card`} style={style}>
      <ProjectCard
        id={project.id}
        title={project.title}
        description={project.description}
        img={project.img}
      />
    </div>
  )
}

export default ProjectSliderCard
