// Temporary interface before connecting to API
// TODO: replace with real zod schemas

export interface ProjectLanguage {
  title: string
  color: string
}

export interface Project {
  title: string
  description: string
  cover: string
  slug: string
  stack: ProjectLanguage[]
}
