import { getProjectTranslations } from './project.utils'
import { mockProjects } from './projects.mock'
import type { Project, TranslatedProject } from './projects.schemas'

export class ProjectCache {
  private static instance: ProjectCache | null = null
  public raw: Project[] | null = null
  private translatedProjects: Record<string, TranslatedProject[]> | null = null

  private constructor() {
    ProjectCache.instance = this
  }

  public static async get(): Promise<ProjectCache> {
    if (ProjectCache.instance) return ProjectCache.instance
    const cache = new ProjectCache()
    await cache.sync()
    return cache
  }

  private async sync(): Promise<void> {
    this.raw = mockProjects
    const pendingTranslations: Record<string, TranslatedProject[]> = {}

    this.raw.forEach((p) => {
      const translations = getProjectTranslations(p)
      Object.keys(translations).forEach((t) => {
        if (!pendingTranslations[t]) {
          pendingTranslations[t] = [translations[t]]
        } else pendingTranslations[t].push(translations[t])
      })
    })
    this.translatedProjects = pendingTranslations
    console.log(
      `created project translations for languages ${Object.keys(this.translatedProjects).join(',')}`
    )
  }

  public getAllRawProjects(): Project[] {
    if (!this.raw) throw new Error('no data available')
    return this.raw
  }

  public getAllProjects(): Record<string, TranslatedProject[]> {
    if (!this.translatedProjects) throw new Error('Project cache not synced')
    return this.translatedProjects
  }

  public getAllTranslatedProjects(lang: string): TranslatedProject[] {
    if (!this.translatedProjects) throw new Error('Project cache not synced')
    if (!Object.keys(this.translatedProjects).includes(lang))
      throw new Error(`language ${lang} is not available for projects`)
    return this.translatedProjects[lang]
  }
}
