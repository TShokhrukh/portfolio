import type { IPopperViewModel } from '~/components/Popper'

export interface ILanguagePickViewModel extends IPopperViewModel {
  supported: string[],
  current: string,
  setLocal(language: string): void
}
