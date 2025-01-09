import "./Hero.css"

import { Github, Mail } from "../icons"
import Button from "../Button"

const Hero: React.FC = () => {
	return (
		<section id="hero" className="background_light">
			<div className="container split">
				<div id="hero_text">
					<h1>Pierre Gaillard</h1>
					<h2>Développeur web</h2>
					<div className="split left button_container">
						<Button link="https://github.com/Pierre-gaillard-dev">
							<Github />
							<span>Github</span>
						</Button>
						<Button link="mailto:pierre.gaillard.dev@gmail.com">
							<Mail />
							<span>Mail</span>
						</Button>
					</div>
					<p>
						Je m’appelle Pierre Gaillard, je suis étudiant à
						MyDigitalSchool Vannes et je suis{" "}
					</p>
				</div>
				<div id="hero_image">
					<img src="../img/photo.png" alt="Pierre Gaillard" />
				</div>
			</div>
		</section>
	)
}

export default Hero
