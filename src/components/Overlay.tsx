import { FC, ReactNode } from "react"
import "./css/Overlay.css"

const Overlay: FC<{ children: ReactNode; close: () => void }> = ({
  children,
  close,
}) => {
  return (
    <div className="overlay_background" onClick={close}>
      <div className="overlay" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Overlay
