"use client";

import { useState, useEffect, FC, useRef, PointerEvent } from "react";
import Link  from "next/link";

import type { Project as ProjectType } from "@/type";

import projectService from "@/services/projects";

import { ChevronRight } from "@/components/ui/Icons";
import ProjectSliderCard from "./ProjectSliderCard";

import "@/styles/partials/home/Projects.css";
import Overlay from "@/components/ui/Overlay";
import ProjectDetail from "@/components/projectDetail";

interface ProjectsProps {
  initialProjects?: ProjectType[];
}

const Projects: FC<ProjectsProps> = ({ initialProjects = [] }) => {

  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerDown = useRef<boolean>(false);
  const pointerPosition = useRef<number>(0);

  const [projects, setProjects] = useState<ProjectType[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    projectService
      .getProjects()
      .then(data => {
        setProjects(data.splice(0, 3));
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    pointerPosition.current = e.clientX;
    isPointerDown.current = true;
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!isPointerDown.current) return;
    const delta = (e.clientX - pointerPosition.current) / 360;
    // Do something with the delta
    setIndex(prevIndex => {
      return (prevIndex + 3 - delta) % 3;
    });
    pointerPosition.current = e.clientX;
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isPointerDown.current = false;
    pointerPosition.current = 0;
    setIndex(prevIndex => {
      return Math.round(prevIndex);
    });
  };

  const handleProjectClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const handleProjectUnclick = () => {
    setSelectedProject(null);
  }

  return (
    <section id="projects" className="container">
      <div className="split">
        <h2>Mes projets</h2>
        <Link href="/projects" id="projects_link">
          Tous mes projets
          <ChevronRight />
        </Link>
      </div>
      <div
        className="projects_container"
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {projects.map((project, position) => (
          <ProjectSliderCard
            key={project.id}
            project={project}
            index={position}
            currentIndex={index}
            onClick={handleProjectClick}
          />
        ))}
      </div>
      <div id="projects_link_bottom">
        <a href="/projects">
          Tous mes projets
          <ChevronRight />
        </a>
      </div>
      {selectedProject && (
        <Overlay close={handleProjectUnclick}>
          <ProjectDetail project={selectedProject} onClose={handleProjectUnclick} />
        </Overlay>
      )}
    </section>
  );
};

export default Projects;
