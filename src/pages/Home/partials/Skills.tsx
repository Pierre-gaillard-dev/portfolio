import { FC } from "react"
import "./Skills.css"

const Skills: FC = () => {
  return (
    <section className="background_light" id="skills">
      <div className="container">
        <h2>Mes compétences</h2>
        <div className="split">
          <div>
            <h3>Back-end</h3>
            <div className="skills">
              <div className="split left card">
                <img src="../icons/php.svg" />
                <h4>PHP</h4>
              </div>
              <div className="split left card">
                <img src="../icons/python.svg" />
                <h4>Python</h4>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div>
            <h3>Front-end</h3>
            <div className="skills">
              <div className="split left card">
                <img src="../icons/javascript.svg" />
                <h4>Javascript</h4>
              </div>
              <div className="split left card">
                <img src="./icons/react.webp" />
                <h4>React</h4>
              </div>
              <div className="split left card">
                <img src="./icons/ionics.webp" />
                <h4>Ionics</h4>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div>
            <h3>Outils</h3>
            <div className="skills">
              <div className="split left card">
                <img src="../icons/github-mark/github-mark-white.svg" />
                <h4>Github</h4>
              </div>
              <div className="split left card">
                <img src="../icons/figma.svg" />
                <h4>Figma</h4>
              </div>
              <div className="split left card">
                <img src="../icons/adobe.svg" />
                <h4>Adobe suite</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
