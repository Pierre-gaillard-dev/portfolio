export interface Skill {
  title: string
  color: string
}

export interface SkillGroup {
  title: string
  skills: Skill[]
}
