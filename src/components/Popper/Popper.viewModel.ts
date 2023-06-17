import type { IPopperModel, IPopperViewModel } from './__types__'

export class PopperViewMode implements IPopperViewModel {
  private modal: IPopperModel

  constructor (model: IPopperModel) {
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
