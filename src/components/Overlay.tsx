import React from "react"

import "./css/Overlay.css"

const Overlay: React.FC<{ children: React.ReactNode, close: () => void }> = ({ children, close }) => {
	return (
		<div className="overlay_background" onClick={close}>
			<div className="overlay" onClick={(e) => e.stopPropagation()}>{children}</div>
		</div>
	)
}

export default Overlay