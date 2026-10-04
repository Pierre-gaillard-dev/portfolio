import { useTranslations } from '../../i18n'
import type { SkillGroup } from './skills.schemas'

export const getSkillGroups = (lang: string): SkillGroup[] => {
  const t = useTranslations(lang).home.skills
  return [
    {
      title: t.groups['front-end'],
      skills: [
        {
          title: 'React',
          color: '#fff',
        },
        {
          title: 'Tanstack',
          color: '#fff',
        },
        {
          title: 'Astro',
          color: '#fff',
        },
      ],
    },
    {
      title: t.groups['back-end'],
      skills: [
        {
          title: 'Node',
          color: '#fff',
        },
        {
          title: 'Postgres',
          color: '#fff',
        },
      ],
    },
    {
      title: t.groups.infra,
      skills: [
        {
          title: 'Linux',
          color: '#fff',
        },
        {
          title: 'Docker',
          color: '#fff',
        },
        {
          title: 'CI/CD',
          color: '#fff',
        },
      ],
    },
    {
      title: t.groups.tools,
      skills: [
        {
          title: 'Git',
          color: '#fff',
        },
        {
          title: 'Figma',
          color: '#fff',
        },
        {
          title: 'Claude',
          color: '#fff',
        },
      ],
    },
  ]
}
