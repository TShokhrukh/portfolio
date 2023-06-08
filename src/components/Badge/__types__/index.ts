import type { ReactNode, ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface IBadgeProps extends IClassNameProps {
  role?: string,
  id?: string,
  component?: ElementType,
  children?: ReactNode
}

export interface IBadgeColorProps {
  color?: 'purple'
}
