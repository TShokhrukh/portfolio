import { LanguagePickViewModel } from '~/components/LanguagePick/LanguagePick.viewModel'
import type { ILanguagePickModel, ILanguagePickViewModel } from '~/components/LanguagePick/__types__'
import type { IPopperModel } from '~/components/Popper/__types__'
import type { IHeaderViewModel } from './__types__'

export class HeaderViewModel implements IHeaderViewModel {
  language: ILanguagePickViewModel

  constructor (
    languageModel: ILanguagePickModel,
    popperModel: IPopperModel
  ) {
    this.language = new LanguagePickViewModel(languageModel, popperModel)
  }
}
