import React from "react"
import Link from "next/link"

import "./Project.css"

const Project: React.FC<{
	id: string
	title: string
	img: string
	description: string
	languages: { text: string; className: string }[]
	href: string
    selected?: boolean
    onHover?: () => void
}> = (props) => {
	return (
		<Link href={props.href} className={"project" + (props.selected ? " selected" : "")} id={props.id} onMouseEnter={props.onHover}>
			<article className="card">
				<div className="image_container">
					<img src={props.img} />
				</div>
				<h3>{props.title}</h3>
				<p>{props.description}</p>
				<div className="split left languages">
					{props.languages.map((language, index) => {
						return (
							<p key={index} className={language.className}>
								{language.text}
							</p>
						)
					})}
				</div>
			</article>
		</Link>
	)
}

export default Project
