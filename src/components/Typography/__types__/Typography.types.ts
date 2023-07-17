import type { ReactNode, ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface ITypographyProps extends IClassNameProps {
  id?: string,
  component?: ElementType,
  children?: ReactNode
}
