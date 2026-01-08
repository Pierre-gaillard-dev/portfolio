import type { Metadata } from "next";

import projects from "@/services/projects";

import Hero from "./partials/Hero";
import Projects from "./partials/Projects";
import Skills from "./partials/Skills";

export const metadata: Metadata = {
  title: "Pierre Gaillard, développeur web à Vannes",
  description:
    "Portfolio de Pierre Gaillard, développeur web passionné. Découvrez mes projets React, TypeScript et mes compétences en développement frontend.",
};

export default async function Home() {
  const projectList = await projects.getProjects();

  return (
    <>
      <Hero />
      <Projects projects={projectList} />
      <Skills />
    </>
  );
}
