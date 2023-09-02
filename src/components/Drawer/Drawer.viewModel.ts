import type { IDrawerModel, IDrawerViewModel } from './__types__'

export class DrawerViewMode implements IDrawerViewModel {
  private modal: IDrawerModel

  constructor (model: IDrawerModel) {
    this.modal = model
  }

  get isOpen (): boolean {
    return this.modal.isOpen
  }

  toggle = (): void => {
    this.modal.setIsOpen(!this.isOpen)
  }

  open = (): void => {
    this.modal.setIsOpen(true)
  }

  close = (): void => {
    this.modal.setIsOpen(false)
  }
}
