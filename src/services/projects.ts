import api from '@/config/api'
import type { Project } from '@/type'

class ProjectService {
  private static instance: ProjectService | null = null

  private constructor() {}

  public static getInstance(): ProjectService {
    if (this.instance === null) {
      this.instance = new ProjectService()
    }
    return this.instance
  }

  public async getProjects(): Promise<Project[]> {
    try {
      const response = await api.get('/projects')
      return response.data as Project[]
    } catch (_) {
      return []
    }
  }

  public async getProjectById(id: string): Promise<Project | null> {
    try {
      const response = await api.get(`/projects/${id}`)
      return response.data as Project
    } catch (_) {
      return null
    }
  }

  public async getProjectBySlug(slug: string): Promise<Project | null> {
    try {
      const response = await api.get(`/projects/${slug}`)
      return response.data as Project
    } catch (_) {
      return null
    }
  }
}

export default ProjectService.getInstance()
