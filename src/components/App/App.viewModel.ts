import { HeaderViewModel } from '../Header/Header.viewModel'
import { PopperModel } from '../Popper/Popper.model'
import { AppLanguagePickModel } from './model'

import type { IHeaderViewModel } from '../Header/__types__'
import type { IAppViewModel } from './__types__'

export class AppViewModel implements IAppViewModel {
  public header: IHeaderViewModel
  public locales: AppLanguagePickModel

  constructor () {
    this.locales = new AppLanguagePickModel()

    this.header = new HeaderViewModel(
      this.locales,
      new PopperModel()
    )
  }
}
