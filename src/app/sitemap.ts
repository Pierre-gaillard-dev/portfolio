// app/sitemap.ts
import { MetadataRoute } from 'next'
import projects from '@/services/projects'

// INDISPENSABLE pour "output: export"
export const dynamic = 'force-static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.pierre-gaillard.dev'

  try {
    const allProjects = await projects.getProjects()

    const projectEntries = allProjects.map((project) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      },
      ...projectEntries,
    ]
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur sitemap:', error)
    // Retourne au moins la home si l'API échoue au build
    return [{ url: baseUrl, lastModified: new Date() }]
  }
}
