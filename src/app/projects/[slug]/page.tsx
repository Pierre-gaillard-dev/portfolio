import projects from "@/services/projects";

interface pageProps {
  params: { id: string };
}

const Project = async ({ params }: pageProps) => {
  const project = projects.getProjectById(params.id);

  return <div>Page individuelle de projet</div>;
};

export default Project;
