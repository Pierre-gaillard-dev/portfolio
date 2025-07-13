import { Helmet } from "react-helmet"

import Hero from "../components/home/Hero"
import Projects from "../components/home/Projects"
import Skills from "../components/home/Skills"

const metadata = {
  title: "Pierre Gaillard, développeur web à Vannes",
  description:
    "Portfolio de Pierre Gaillard, développeur web passionné. Découvrez mes projets React, TypeScript et mes compétences en développement frontend.",
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <Hero />
      <Projects />
      <Skills />
    </>
  )
}
