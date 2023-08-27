import { makeObservable, observable, action } from 'mobx'
import type { TranslationError, Locale } from '@eo-locale/core'
import { LanguagePickModel } from '~/components/LanguagePick/LanguagePick.model'
import type { IAppLanguagePickModel } from '../__types__'

export class AppLanguagePickModel extends LanguagePickModel implements IAppLanguagePickModel {
  static readonly DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE
  static readonly SUPPORTED_LANGUAGES = process.env.SUPPORTED_LANGUAGES.split(',')

  @observable public locales: Locale[]

  constructor () {
    super(AppLanguagePickModel.DEFAULT_LANGUAGE, AppLanguagePickModel.SUPPORTED_LANGUAGES)

    this.locales = []
    makeObservable(this)

    this.setLocal(AppLanguagePickModel.DEFAULT_LANGUAGE)
  }

  /**
   * sets the application language and loads localization data
   * @param language
   */
  public async setLocal (language: string): Promise<void> {
    const locale = await this.fetchLocales(language)
    // if there is localization data, then do not set them
    if (!this.locales.find(l => l.language === language)) {
      this.setLocales(this.locales.concat(locale))
    }
    super.setLocal(language)
  }

  /**
   * localization error handling
   * @param error EoLocale error
   */
  public onLocaleError (error: TranslationError) {
    if (process.env.NODE_ENV === 'development') {
      // display error
      console.warn(`Message '${error.id}' missed in [${error.language}]`)
    }
  }

  /**
   * sets the localization data
   * @param language
   */
  @action
  private setLocales (locale: Locale[]) {
    this.locales = locale
  }

  /**
   * loads localization data
   * @param language
   * @returns localization data
   */
  private async fetchLocales (language: string): Promise<Locale> {
    const module = await import(
      /* webpackInclude: /\.json$/ */
      /* webpackChunkName: './lang/[request]' */
      `~/static/i18n/${language}.json`
    )
    return { language, messages: module.default }
  }
}
