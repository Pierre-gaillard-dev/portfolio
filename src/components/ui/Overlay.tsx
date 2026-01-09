"use client"

import { FC, ReactNode } from "react"
import "@/styles/components/ui/Overlay.css"

export interface OverlayProps { 
  children: ReactNode
  close: () => void 
}

const Overlay: FC<OverlayProps> = ({
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
