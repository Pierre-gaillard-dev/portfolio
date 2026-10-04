import { mockProjects } from './projects.mock'
import type { Project } from './projects.schemas'

export const getProjects = async (_lang: string): Promise<Project[]> => {
  return Promise.resolve(mockProjects)
}
