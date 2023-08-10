import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'
import type { IProject } from '~/components/ProjectCard/__types__'

export interface IProjectsListProps extends IClassNameProps, IComponentProp {
  projects: IProject[]
}

export {
  IProject
}
