"use client"
import React from "react"
import { useState } from "react"

import { Github, Mail, File } from "../icons"
import Activity from "../Activity"
import Button from "../Button"
import Overlay from "../Overlay"
import CV from "../CV"

import "./Hero.css"

const Hero: React.FC = () => {
	const [CVOpened, setCVOpened] = useState<boolean>(false)

	return (
		<section id="hero" className="background_light">
			{CVOpened && (
				<Overlay close={() => setCVOpened(false)}>
					<CV />
				</Overlay>
			)}
			<div className="container split">
				<div id="hero_text">
					<h1>Pierre Gaillard</h1>
					<h2>Développeur web</h2>
					<div className="split left button_container">
						<Button
							link="https://github.com/Pierre-gaillard-dev"
							id="github"
							target="_blank"
						>
							<Github />
							<span>Github</span>
						</Button>
						<Button link="mailto:pierre.gaillard.dev@gmail.com">
							<Mail />
							<span>Mail</span>
						</Button>
						<Button onClick={() => setCVOpened(true)}>
							<File />
							<span>CV</span>
						</Button>
					</div>
					<div className="presentation">
						<p>
							Je m’appelle Pierre Gaillard, je suis étudiant à
							MyDigitalSchool Vannes et je suis passionné par le
							développement informatique depuis des années.
						</p>
						<p>
							Pour moi, chaque problème a une solution. si on ne
							la trouve pas, alors il suffit de l'inventer.
						</p>
					</div>
					<div>
						<Activity />
					</div>
				</div>
				<div id="hero_image">
					<img
						id="photo"
						src="../img/photo.png"
						alt="Pierre Gaillard"
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
