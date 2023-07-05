import { observable, makeObservable, action } from 'mobx'
import type { ILanguagePickModel } from './__types__'

export class LanguagePickModel implements ILanguagePickModel {
  public _supported: string[]
  @observable public current: string

  constructor (
    current: string,
    supported: string[]
  ) {
    this.current = current
    this._supported = supported

    makeObservable(this)
  }

  get supported (): string[] {
    return this._supported.filter(l => l !== this.current)
  }

  @action
  setLocal (language: string) {
    this.current = language
  }
}
