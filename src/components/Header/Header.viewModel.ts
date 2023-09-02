import { LanguagePickViewModel, ILanguagePickModel, ILanguagePickViewModel } from '~/components/LanguagePick'
import { DrawerViewMode, IDrawerModel, IDrawerViewModel } from '~/components/Drawer'
import type { IPopperModel } from '~/components/Popper'
import type { IHeaderViewModel } from './__types__'

export class HeaderViewModel implements IHeaderViewModel {
  language: ILanguagePickViewModel
  drawer: IDrawerViewModel

  constructor (
    languageModel: ILanguagePickModel,
    popperModel: IPopperModel,
    drawerModel: IDrawerModel
  ) {
    this.language = new LanguagePickViewModel(languageModel, popperModel)
    this.drawer = new DrawerViewMode(drawerModel)
  }
}
