import projectService from "@/services/projects";

import "./Projects.css";

const Projects = () => {
  const projects = projectService.getProjects();

  return (
    <div className="content projects">
      <section id="hero" className="background_light">
        <h1>Mes projets</h1>
      </section>
      <section id="projects" className="container">
        <ProjectList projects={projects} />
      </section>
    </div>
  );
};

export default Projects;
