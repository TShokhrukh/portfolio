import type { ElementType, ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'

export interface IPreviewProps extends IClassNameProps {
  component?: ElementType
}

export interface IPreviewIconProps extends IClassNameProps {
  name: string
}

export interface IPreviewContentProps extends IClassNameProps {
  children?: ReactNode,
}
