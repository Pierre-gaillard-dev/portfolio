import { FC } from "react"
import SkeletonDiv from "./ui/SkeletonDiv"
import "@styles/components/ui/ProjectCardSkeleton.css"

const ProjectCardSkeleton: FC = () => {
  return (
    <div className="project-card-skeleton card">
      <SkeletonDiv height="200px" />
      <SkeletonDiv height="50px" width="200px" className="margin" />
      <SkeletonDiv height="150px" width="auto" className="margin" />
      <SkeletonDiv height="30px" width="80px" className="margin" />
    </div>
  )
}

export default ProjectCardSkeleton
