import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'
import type { IProject } from '~/types'

export interface IProjectCardContext {
  project: IProject
}

export interface IProjectCardProps extends IClassNameProps, IComponentProp {
  project: IProject
}

export { IProject }
