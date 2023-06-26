import type { ElementType, ComponentType, ReactNode, SyntheticEvent, RefObject } from 'react'
import type { IClassNameProps } from '@bem-react/core'

type TInnerRef = {
  innerRef?: RefObject<HTMLElement>,
  ref?: undefined
}
type THtmlRef = {
  ref?: RefObject<HTMLElement>,
  innerRef?: undefined
}

export interface IIconProps {
  className: string
}

export type TRef = TInnerRef | THtmlRef

export interface IButtonProps extends IClassNameProps {
  component?: ElementType,
  startIcon?: ComponentType<IIconProps>,
  endIcon?: ComponentType<IIconProps>,
  type?: 'submit'|'button'|'reset',
  id?: string,
  children?: ReactNode,
  innerRef?: RefObject<HTMLElement>
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void
}
