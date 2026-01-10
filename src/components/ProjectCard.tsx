'use client'

import { FC } from 'react'
import '@/styles/components/ProjectCard.css'
import { Language } from '../type'

export interface ProjectCardProps {
  id: number
  title: string
  img: string
  description: string
  languages?: Language[] | null
  selected?: boolean
  onHover?: () => void
  onClick?: () => void
  style?: React.CSSProperties
}

const ProjectCard: FC<ProjectCardProps> = ({
  id,
  title,
  img,
  description,
  languages,
  selected,
  onHover,
  onClick,
  style,
}) => {
  return (
    <a
      onClick={onClick}
      className={'project' + (selected ? ' selected' : '')}
      id={id.toString()}
      onMouseEnter={onHover}
    >
      <article className='card' style={style}>
        <div className='image_container'>
          <img src={img} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='split left languages'>
          {languages?.map((language, index) => {
            return (
              <p key={index} className={language.slug}>
                {language.name}
              </p>
            )
          })}
        </div>
      </article>
    </a>
  )
}

export default ProjectCard
