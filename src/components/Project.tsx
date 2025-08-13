import { language } from "../type"
import "./css/Project.css"

const Project: React.FC<{
  id: string
  title: string
  img: string
  description: string
  languages?: language[] | null
  selected?: boolean
  onHover?: () => void
  onClick?: () => void
}> = props => {
  return (
    <a
      onClick={props.onClick}
      className={"project" + (props.selected ? " selected" : "")}
      id={props.id}
      onMouseEnter={props.onHover}
    >
      <article className="card">
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

export default Project
