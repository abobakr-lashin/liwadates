import type { Locale } from '@/i18n'

const dictionaries = {
  en: () => import('@/locales/en/nav.json').then((mod) => mod.default),
  ar: () => import('@/locales/ar/nav.json').then((mod) => mod.default),
  fr: () => import('@/locales/fr/common.json').then((mod) => mod.default),
}

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}
