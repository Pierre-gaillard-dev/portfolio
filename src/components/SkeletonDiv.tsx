import { FC } from "react"
import "./css/SkeletonDiv.css"

interface SkeletonDivProps {
  width?: string
  height?: string
  className?: string
}

const SkeletonDiv: FC<SkeletonDivProps> = ({
  width = "100%",
  height = "100%",
  className = "",
}) => {
  return (
    <div className={`skeleton-div ${className}`} style={{ width, height }} />
  )
}

export default SkeletonDiv
