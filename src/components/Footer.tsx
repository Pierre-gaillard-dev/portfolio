import Link from "next/link"

import { Mail, Github, Linkedin } from "./icons"

import "./Footer.css"

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container split">
				<div className="logo">
				<div className="image_container">
					<img src="/img/photo.png" alt="Logo" />
				</div>
				<h3>Pierre Gaillard</h3>
				</div>
				<div id="contact">
					<h3>Me contacter</h3>
					<div className="split">
						<a href="mailto:pierre.gaillard.dev@gmail.com">
							<Mail />
							pierre.gaillard.dev@gmail.com
						</a>
						<a
							href="https://github.com/Pierre-gaillard-dev"
							target="_blank"
						>
							<Github />
							github.com/Pierre-gaillard-dev
						</a>
						<a
							href="linkedin.com/in/pierre-gaillard-dev/"
							target="_blank"
						>
							<Linkedin />
							linkedin.com/in/pierre-gaillard-dev/
						</a>
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
		</footer>
	)
}

export default Footer
