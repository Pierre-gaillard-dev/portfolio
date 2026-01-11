import projects from '@/services/projects'
import ProjectDetail from '@/components/projectDetail'

interface pageProps {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export async function generateStaticParams() {
  try {
    const allProjects = await projects.getProjects()
    return allProjects.map((project) => ({ slug: project.slug }))
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to fetch projects for static generation:', error)
    return []
  }
}

const Project = async ({ params }: pageProps) => {
  const { slug } = await params
  const project = await projects.getProjectBySlug(slug)

  return (
    <div>
      {project ? <ProjectDetail project={project} /> : <p>Project not found</p>}
    </div>
  )
}

export default Project
