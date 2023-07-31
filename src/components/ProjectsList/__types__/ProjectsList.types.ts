import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/src/types/react'
import type { IProject } from '~/src/components/ProjectCard/__types__'

export interface IProjectsListProps extends IClassNameProps, IComponentProp {
  projects: IProject[]
}

export {
  IProject
}
