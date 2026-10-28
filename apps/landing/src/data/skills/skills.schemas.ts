type planet = 'red' | 'blue' | 'green' | 'purple'

export interface Skill {
  title: string
  color: string
}

export interface SkillGroup {
  title: string
  planet: planet
  skills: Skill[]
}
