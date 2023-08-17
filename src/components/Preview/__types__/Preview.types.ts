import type { ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'

export interface IPreviewProps extends IClassNameProps, IComponentProp {

}

export interface IPreviewIconProps extends IClassNameProps {
  name: string
}

export interface IPreviewContentProps extends IClassNameProps {
  children?: ReactNode,
}

export interface IPreviewInnerProps {
  children?: ReactNode,
}
