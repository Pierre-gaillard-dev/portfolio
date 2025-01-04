import Link from "next/link"

import { Mail, Github, Linkedin } from "./icons"

import "./Footer.css"

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container split">
				<div className="image_container">
					<img src="/img/photo.png" alt="Logo" />
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
							https://github.com/Pierre-gaillard-dev
						</a>
                        <a href="https://www.linkedin.com/in/pierre-gaillard-dev/" target="_blank">
                            <Linkedin />
                            https://www.linkedin.com/in/pierre-gaillard-dev/
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
						<Link href="/cgu">CGU</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
