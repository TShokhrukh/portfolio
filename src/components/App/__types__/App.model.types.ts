import type { TranslationError, Locale } from '@eo-locale/core'
import type { IHeaderViewModel } from '~/components/Header'
import type { ILanguagePickModel } from '~/components/LanguagePick'

export interface IAppModel {

}

export interface IAppLanguagePickModel extends ILanguagePickModel {
  locales: Locale[],
  onLocaleError(error: TranslationError): void
}

export interface IAppViewModel {
  header: IHeaderViewModel,
  locales: IAppLanguagePickModel
}
