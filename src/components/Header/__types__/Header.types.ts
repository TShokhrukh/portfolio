import type { IClassNameProps } from '@bem-react/core'
import type { ILink } from '~/components/Nav/__types__'
import type { ILanguagePickViewModel } from '~/components/LanguagePick/__types__'

export interface IHeaderViewModel {
  language: ILanguagePickViewModel
}

export interface IHeaderContext {
  links: ILink[],
  activeLink?: string,
  viewModel: IHeaderViewModel
}

export interface IHeaderProps extends IClassNameProps {
  viewModel: IHeaderViewModel,
  links: ILink[],
  activeLink?: string
}
