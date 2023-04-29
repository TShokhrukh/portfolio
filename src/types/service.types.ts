import type { Translator, Locale } from '@eo-locale/core'

export interface ILocalizationService {
  language: string,
  locales: Locale[],
  translator?: Translator
  isLoading: boolean
  setLanguage(language: string): void

  onError?(): void
}
