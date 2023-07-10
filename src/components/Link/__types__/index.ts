import type { ReactNode, ComponentType } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface IIconProps {
  className: string
}

export interface ILinkProps extends IClassNameProps {
  href?: string,
  children?: ReactNode,
  startIcon?: ComponentType<IIconProps>,
  endIcon?: ComponentType<IIconProps>,
  id?: string,
  role?: string,
  rel?: string,
  target?: '_black'|'_parent'|'_self'|'_top'
}

export interface ILinkIconProps {
  icon: ComponentType<IIconProps>,
  direction: 'start'|'end'
}
