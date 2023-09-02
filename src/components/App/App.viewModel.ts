import { HeaderViewModel, IHeaderViewModel } from '../Header'
import { PopperModel } from '../Popper'
import { DrawerModel } from '../Drawer'
import { AppLanguagePickModel } from './model'
import type { IAppViewModel } from './__types__'

export class AppViewModel implements IAppViewModel {
  public header: IHeaderViewModel
  public locales: AppLanguagePickModel

  constructor () {
    this.locales = new AppLanguagePickModel()

    this.header = new HeaderViewModel(
      this.locales,
      new PopperModel(),
      new DrawerModel()
    )
  }
}
