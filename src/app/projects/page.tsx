import projectService from "@/services/projects";

import ProjectList from "@/partials/projects/ProjectList";
import "@/styles/pages/Projects.css";

const Projects = async () => {
  const projects = await projectService.getProjects();

  return (
    <div className="content projects">
      <section id="hero" className="background_light">
        <h1>Mes projets</h1>
      </section>
      <section id="projects" className="container">
        <ProjectList initialProjects={projects} />
      </section>
    </div>
  );
};

export default Projects;
