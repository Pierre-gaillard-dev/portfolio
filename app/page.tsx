import React from "react";

import Hero from "@/src/components/home/Hero"
import Projects from "@/src/components/home/Projects"
import Skills from "@/src/components/home/Skills";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Skills />
    </React.Fragment>
  );
}
