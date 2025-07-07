import { FC } from "react"
import { ChevronLeft } from "./icons"

import Button from "./Button"
import "./css/CV.css"

const CV: FC = () => {
  return (
    <section className="CV background_light">
      <div className="container" id="hero" style={{ position: "relative" }}>
        <a onClick={close} className="back">
          <ChevronLeft />
          Retour
        </a>
        <div className="split">
          <h2>Curriculum Vitae</h2>
          <Button
            link="../CV_alternance_Pierre_Gaillard.pdf"
            download="CV_Pierre_Gaillard"
            target="_blank"
          >
            Télécharger
          </Button>
        </div>
      </div>
      <img src="../CV_alternance_Pierre_Gaillard.jpg"></img>
    </section>
  )
}

export default CV
