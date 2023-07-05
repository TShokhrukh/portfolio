import type { IClassNameProps } from '@bem-react/core'
import type { ILanguagePickViewModel } from './LanguagePick.viewModel.types'

export interface ILanguagePickProps extends IClassNameProps {
  viewModel: ILanguagePickViewModel,
  id?: string
}
