import type { ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface IContainerProps extends IClassNameProps {
  id?: string,
  children?: ReactNode
}
