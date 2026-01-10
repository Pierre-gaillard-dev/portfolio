import type { Metadata } from 'next'
import Hero from '@/partials/home/Hero'
import Projects from '@/partials/home/Projects'
import Skills from '@/partials/home/Skills'
import projects from '@/services/projects'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Pierre Gaillard, développeur web à Vannes',
  description:
    'Portfolio de Pierre Gaillard, développeur web passionné. Découvrez mes projets React, TypeScript et mes compétences en développement frontend.',
}

export default async function Home() {
  const projectList = (await projects.getProjects()).slice(0, 3)

  const personSnippet = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pierre Gaillard',
    jobTitle: 'Développeur Web',
    url: 'https://www.pierre-gaillard.dev',
    sameAs: [
      'https://www.linkedin.com/in/pierre-gaillard-dev/',
      'https://github.com/pierre-gaillard-dev',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vannes',
      addressRegion: 'Bretagne',
      addressCountry: 'France',
    },
    email: 'mailto:pierre.gaillard.dev@gmail.com',
    knowsLanguage: ['Français', 'Anglais'],
    knowsAbout: [
      'Développement Web',
      'React',
      'TypeScript',
      'Next.js',
      'PostgreSQL',
      'PHP',
    ],
  }

  const projectsSnippet = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: projectList.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        url: `https://www.pierre-gaillard.dev/projects/${project.slug}`,
        description: project.description.replace(/[\n*]/g, ''),
      },
    })),
  }

  return (
    <>
      <JsonLd data={personSnippet} />
      <JsonLd data={projectsSnippet} />
      <Hero />
      <Projects initialProjects={projectList} />
      <Skills />
    </>
  )
}
