import { LanguagePickViewModel } from '../LanguagePick/LanguagePick.viewModel'

import type { ILanguagePickModel, ILanguagePickViewModel } from '../LanguagePick/__types__'
import type { IPopperModel } from '../Popper/__types__'
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
