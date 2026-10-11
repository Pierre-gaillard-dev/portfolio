import { defaultLanguage } from '../../i18n'
import { mockProjects } from './projects.mock'
import type { Project } from './projects.schemas'

export const getProjects = async (
  _lang: string = defaultLanguage
): Promise<Project[]> => {
  return Promise.resolve(mockProjects)
}
