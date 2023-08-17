import type { IPopperViewModel } from '~/components/Popper/__types__'

export interface ILanguagePickViewModel extends IPopperViewModel {
  supported: string[],
  current: string,
  setLocal(language: string): void
}
