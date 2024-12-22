import React from "react"

import "./Project.css"

const Project: React.FC<{
	id: string
	title: string
	img: string
	description: string
	Languages: { text: string; className: string }[]
    selected: boolean
    onHover: () => void
}> = (props) => {
	return (
		<div className={"project" + (props.selected ? " selected" : "")} id={props.id} onMouseEnter={props.onHover}>
			<article className="card">
				<div className="image_container">
					<img src={props.img} />
				</div>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<div className="split left languages">
					{props.Languages.map((language, index) => {
						return (
							<p key={index} className={language.className}>
								{language.text}
							</p>
						)
					})}
				</div>
			</article>
		</div>
	)
}

export default Project
