import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp, IProject, TProjectsList } from '~/types'

export interface IProjectsListProps extends IClassNameProps, IComponentProp {
  projects: TProjectsList
}

export {
  IProject,
  TProjectsList
}
