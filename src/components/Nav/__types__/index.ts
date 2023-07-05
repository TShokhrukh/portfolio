import type { IClassNameProps } from '@bem-react/core'

export interface INavContext {
  active?: string
}

export interface ILink {
  href: string
  label: string
}

export interface INavProps extends IClassNameProps {
  links: ILink[]
  active?: string
}

export interface INavDirectionProps {
  direction?: 'horizontal'
}

export interface INavItemProps {
  link: ILink
}
