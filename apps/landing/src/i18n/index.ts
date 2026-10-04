import en from './locales/en.json'
import fr from './locales/fr.json'

export type Translations = typeof fr

const ui: { [key: string]: Translations } = {
  en: en,
  fr: fr,
} as const

export const languages = Object.keys(ui)
export const defaultLanguage = 'fr'

export const useTranslations = (lang: string) => {
  return ui[lang] ?? ui.fr
}
