import Link from "next/link"

import { Mail, Github, Linkedin } from "./icons"
import Button from "./Button"

import "./css/Footer.css"

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container split">
				<Link href="/#hero" className="logo">
					<div className="image_container">
						<img src="/img/photo.png" alt="Logo" />
					</div>
					<h3>Pierre Gaillard</h3>
				</Link>
				<div id="contact">
					<h3 className="center">Me contacter</h3>
					<div className="split">
						<Button link="mailto:pierre.gaillard.dev@gmail.com">
							<Mail />
						</Button>
						<Button
							link="https://github.com/Pierre-gaillard-dev"
							target="_blank"
						>
							<Github />
						</Button>
						<Button
							link="linkedin.com/in/pierre-gaillard-dev/"
							target="_blank"
						>
							<Linkedin />
						</Button>
					</div>
				</div>
				<div id="legal">
					<h3>Liens utiles</h3>
					<div className="split">
						<Link href="/mentions-legales">
							Mentions L&eacute;gales
						</Link>
						<Link href="/politique-de-confidentialite">
							Politique de confidentialit&eacute;
						</Link>
						<Link href="/politique-de-cookies">
							Politique de cookies
						</Link>
					</div>
				</div>
			</div>
			<p className="center">Copyright © 2023 Pierre Gaillard</p>
		</footer>
	)
}

export default Footer
