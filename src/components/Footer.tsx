import { FC } from "react"
import Link from "next/link"

import { Mail, Github, Linkedin } from "./ui/Icons"
import Button from "./ui/Button"

import scrollToAnchor from "../util/scrollToAnchor"

import "@/styles/components/Footer.css"

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container split">
        <Link
          href="/#hero"
          onClick={() => scrollToAnchor("hero")}
          className="logo"
        >
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
              link="https://linkedin.com/in/pierre-gaillard-dev/"
              target="_blank"
            >
              <Linkedin />
            </Button>
          </div>
        </div>
        <div id="legal">
          <h3>Liens utiles</h3>
          <div className="split">
            <Link href="/legal-notices">Mentions L&eacute;gales</Link>
            <Link href="/privacy-policy">
              Politique de confidentialit&eacute;
            </Link>
            <Link href="/cookie-policy">Politique de cookies</Link>
          </div>
        </div>
      </div>
      <p className="center">Copyright © 2023 Pierre Gaillard</p>
    </footer>
  )
}

export default Footer
