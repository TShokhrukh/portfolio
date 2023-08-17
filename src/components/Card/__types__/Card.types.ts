import type { ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'
export interface ICardProps extends IClassNameProps, IComponentProp {
  children?: ReactNode
}
