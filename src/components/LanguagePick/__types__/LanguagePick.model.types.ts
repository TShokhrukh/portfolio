export interface ILanguagePickModel {
  supported: string[],
  current: string,
  setLocal(language: string): void
}
