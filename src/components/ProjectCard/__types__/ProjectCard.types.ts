import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/src/types/react'
import type { TLocale } from '~/src/types'

export interface IProject {
  id: string,
  name: string,
  desc: TLocale<string>,
  stack: string[],
  image: string,
  href?: string,
}

export interface IProjectCardContext {
  project: IProject
}

export interface IProjectCardProps extends IClassNameProps, IComponentProp {
  project: IProject
}
