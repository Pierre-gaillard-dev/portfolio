import api from "@/src/config/api"
import type { Project } from "@/src/type"

class projectService {
  private static instance: projectService | null = null

  private constructor() {}

  public static getInstance(): projectService {
    if (this.instance === null) {
      this.instance = new projectService()
    }
    return this.instance
  }

  public async getProjects(): Promise<Project[]> {
    try {
      const response = await api.get("/projects")
      return response.data as Project[]
    } catch (error) {
      console.error("Error fetching projects:", error)
      return []
    }
  }

  public async getProjectById(id: string): Promise<Project | null> {
    try {
      const response = await api.get(`/projects/${id}`)
      return response.data as Project
    } catch (error) {
      console.error(`Error fetching project with id ${id}:`, error)
      return null
    }
  }
}

export default projectService
