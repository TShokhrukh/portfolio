import type { ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import { IComponentProp } from '~/types/react'

export interface IBadgeSectionProps extends IClassNameProps, IComponentProp {
  badge?: ReactNode,
  title?: ReactNode,
  children?: ReactNode,
}
