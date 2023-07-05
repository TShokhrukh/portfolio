import { makeObservable, observable, action } from 'mobx'
import type { ILanguagePickViewModel, ILanguagePickModel } from './__types__'
import type { IPopperModel } from '../Popper/__types__'

export class LanguagePickViewModel implements ILanguagePickViewModel {
  @observable.ref private language: ILanguagePickModel
  @observable.ref private popper: IPopperModel

  constructor (
    languageModel: ILanguagePickModel,
    popperModel: IPopperModel
  ) {
    this.language = languageModel
    this.popper = popperModel

    makeObservable(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  get supported (): string[] {
    return this.language.supported
  }

  get current (): string {
    return this.language.current
  }

  get isOpen (): boolean {
    return this.popper.isOpen
  }

  @action
  setLocal (language: string): void {
    this.language.setLocal(language)
    this.close()
  }

  @action
  open (): void {
    this.popper.setIsOpen(true)
  }

  @action
  close (): void {
    this.popper.setIsOpen(false)
  }

  @action
  toggle (): void {
    this.popper.setIsOpen(!this.isOpen)
  }
}
