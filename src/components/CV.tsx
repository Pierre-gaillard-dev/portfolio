import { ChevronLeft } from "./icons"

import "./css/CV.css"
import Button from "./Button"

const CV: React.FC = () => {
	return (
		<section className="CV background_light">
			<div className="container" id="hero" style={{position: "relative"}}>
				<a onClick={close} className="back">
					<ChevronLeft />
					Retour
				</a>
                <div className="split">
				<h2>Curriculum Vitae</h2>
                <Button link="../CV_alternance_Pierre_Gaillard.pdf" download="CV_Pierre_Gaillard" target="_blank">
                    Télécharger
                </Button>
                </div>
			</div>
			<img src="../CV_alternance_Pierre_Gaillard.jpg"></img>
		</section>
	)
}

export default CV
