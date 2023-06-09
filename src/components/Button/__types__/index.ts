import type { ElementType, ComponentType, ReactNode, SyntheticEvent } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface IIconProps {
  className: string
}

export interface IButtonProps extends IClassNameProps {
  component?: ElementType,
  startIcon?: ComponentType<IIconProps>,
  endIcon?: ComponentType<IIconProps>,
  rounded?: boolean,
  disabled?: boolean,
  type?: 'submit'|'button'|'reset',
  id?: string,
  children?: ReactNode,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void
}

export interface IButtonVariantLinkProps {
  variant?: 'link',
  type?: undefined,
  href?: string
}

export interface IButtonIconProps {
  icon: ComponentType<IIconProps>,
  direction: 'start'|'end'
}
