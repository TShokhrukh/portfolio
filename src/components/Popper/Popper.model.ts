import { observable, action, makeObservable } from 'mobx'
import type { IPopperModel } from './__types__'

export class PopperModel implements IPopperModel {
  @observable isOpen: boolean

  constructor (open?: boolean) {
    this.isOpen = open || false
    makeObservable(this)
  }

  @action
  setIsOpen (open: boolean): void {
    this.isOpen = open
  }
}
