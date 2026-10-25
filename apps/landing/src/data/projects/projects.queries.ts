import { defaultLanguage } from '../../i18n'
import { ProjectCache } from './project.cache'
import type { Project, TranslatedProject } from './projects.schemas'

export const getProjects = async (
  _lang: string = defaultLanguage
): Promise<Project[]> => {
  const cache = await ProjectCache.get()
  return cache.getAllRawProjects()
}

export const getTranslatedProjects = async (
  lang: string
): Promise<TranslatedProject[]> => {
  const cache = await ProjectCache.get()
  return cache.getAllTranslatedProjects(lang)
}

export const getProject = async (
  lang: string,
  slug: string
): Promise<TranslatedProject> => {
  const cache = await ProjectCache.get()
  const projects = cache.getAllTranslatedProjects(lang)
  const p = projects.find((p) => p.slug === slug)
  if (!p) throw new Error(`project ${slug} for translation ${lang} not found`)
  return p
}
