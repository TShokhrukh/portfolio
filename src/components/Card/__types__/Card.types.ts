import type { ReactNode, ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface ICardProps extends IClassNameProps {
  component?: ElementType,
  children?: ReactNode
}
