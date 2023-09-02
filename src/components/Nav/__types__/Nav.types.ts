import type { IClassNameProps } from '@bem-react/core'

export interface ILink {
  href: string
  label: string
}

export interface INavItemProps {
  link: ILink
}

export interface INavProps extends IClassNameProps {
  links: ILink[]
  active?: string
}

export interface INavContext {
  active?: string
}
