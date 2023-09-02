import { observable, action, makeObservable } from 'mobx'
import type { IDrawerModel } from './__types__'

export class DrawerModel implements IDrawerModel {
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
