import { domain } from '../data/const'
import { defaultLanguage } from '../i18n'

export const urlFor = (...parts: (string | undefined)[]): string => {
  return `${domain}/${parts.filter((part) => part !== undefined && part != defaultLanguage).join('/')}`
}
