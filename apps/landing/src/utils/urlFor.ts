import { defaultLanguage } from '../i18n'

export const urlFor = (...parts: (string | undefined)[]): string => {
  return `/${parts.filter((part) => part !== undefined && part != defaultLanguage).join('/')}`
}
