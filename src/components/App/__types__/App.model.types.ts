import type { TranslationError, Locale } from '@eo-locale/core'
import type { IHeaderViewModel } from '../../Header/__types__'
import type { ILanguagePickModel } from '../../LanguagePick/__types__'

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
