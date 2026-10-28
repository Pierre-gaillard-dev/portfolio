import { languagePriority, useTranslations, languages } from '../../i18n'
import { urlFor } from '../../utils/urlFor'
import type { Project, TranslatedProject } from './projects.schemas'

export const getBestProjectTranslation = (
  lang: string,
  project: Project
): TranslatedProject => {
  if (Object.keys(project.translations).length === 0)
    throw new Error(
      `could not find any translation for project ${project.github_url}`
    )

  const translations = getProjectTranslations(project)
  if (Object.keys(translations).length === 0)
    throw new Error(
      `could not find any translation for project ${project.github_url}`
    )

  const order = [lang, ...languagePriority]
  for (const l of order) {
    const t = translations[l]
    if (t) return t
  }
  return translations[Object.keys(translations)[0]]
}

export const getProjectTranslations = (
  project: Project
): Record<string, TranslatedProject> => {
  const { translations, ...base } = project
  const projectLanguages = Object.keys(translations).filter((l) =>
    languages.includes(l)
  )

  const variants: TranslatedProject['language_variants'] = projectLanguages.map(
    (lang) => {
      const t = useTranslations(lang)
      return {
        lang,
        url: urlFor(lang, t.url.projects, translations[lang].slug),
      }
    }
  )

  const translatedProjects: Record<string, TranslatedProject> = {}
  projectLanguages.forEach((l) => {
    translatedProjects[l] = {
      ...base,
      ...project.translations[l],
      lang: l,
      language_variants: variants,
    }
  })

  return translatedProjects
}
