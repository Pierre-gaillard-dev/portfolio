import ProjectDetail from "@/components/projectDetail";
import projects from "@/services/projects";

interface pageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const allProjects = await projects.getProjects();
  return allProjects.map((project) => ({ slug: project.slug }));
}

const Project = async ({ params }: pageProps) => {
  const {slug} = await params;
  const project = await projects.getProjectBySlug(slug);

  return (
    <div>
      {project ? (<ProjectDetail project={project} />) : (<p>Project not found</p>)}
    </div>
  );
};

export default Project;
