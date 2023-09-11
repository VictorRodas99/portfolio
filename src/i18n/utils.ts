import { ui, defaultLang } from '@i18n/ui'

export function getLangfromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')

  if (lang in ui) {
    return lang as keyof typeof ui
  }

  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return (key: keyof (typeof ui)[typeof defaultLang]) => {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
