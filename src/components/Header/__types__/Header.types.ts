import type { IClassNameProps } from '@bem-react/core'
import type { ILink } from '~/components/Nav'
import type { ILanguagePickViewModel } from '~/components/LanguagePick'
import type { IDrawerViewModel } from '~/components/Drawer'

export interface IHeaderViewModel {
  language: ILanguagePickViewModel
  drawer: IDrawerViewModel
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
