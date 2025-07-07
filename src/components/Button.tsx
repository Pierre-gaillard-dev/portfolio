import { FC, ReactNode } from "react"
import "./css/Button.css"

const Button: FC<{
  children: ReactNode
  link?: string
  onClick?: () => void
  download?: string
  color?: "white"
  target?: string
  id?: string
}> = props => {
  return (
    <div className="button_background" id={props.id}>
      <a
        className={"button " + props.color}
        href={props.link}
        onClick={props.onClick}
        download={props.download}
        target={props.target}
      >
        {props.children}
      </a>
    </div>
  )
}

export default Button
