import "./Hero.css"

import { Github, Mail } from "../icons"

const Hero: React.FC = () => {
    return (
        <section id="hero" className="background_light">
        <div className="container split">
            <div id="hero_text">
                <h1>Pierre Gaillard</h1>
                <h2>Développeur web</h2>
                <div className="split left button_container">
                    <a className="button white" href="https://github.com/Pierre-gaillard-dev" target="_blank">
                        <div className="image_container">
                            <Github />
                        </div>
                        <span>Github</span>
                    </a>
                    <a className="button blue" href="mailto:pierre.gaillard.dev@gmail.com" target="_blank">
                        <div className="image_container">
                            <Mail />
                        </div>
                        <span>Mail</span>
                    </a>
                </div>
                <p>Je m’appelle Pierre Gaillard, je suis étudiant à MyDigitalSchool Vannes et je suis </p>
            </div>
            <div id="hero_image">
                <img src="../img/photo.png" alt="Pierre Gaillard" />
            </div>
        </div>
    </section>
    )
}

export default Hero