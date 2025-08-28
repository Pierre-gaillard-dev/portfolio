import { language } from "../type"
import "./css/ProjectCard.css"

const ProjectCard: React.FC<{
  id: number
  title: string
  img: string
  description: string
  languages?: language[] | null
  selected?: boolean
  onHover?: () => void
  onClick?: () => void
  style?: React.CSSProperties
}> = props => {
  return (
    <a
      onClick={props.onClick}
      className={"project" + (props.selected ? " selected" : "")}
      id={props.id.toString()}
      onMouseEnter={props.onHover}
    >
      <article className="card" style={props.style}>
        <div className="image_container">
          <img src={props.img} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="split left languages">
          {props.languages?.map((language, index) => {
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
