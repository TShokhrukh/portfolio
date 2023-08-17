import React, { FC } from 'react'
import { cnProjectsList } from './ProjectsList.const'
import { ProjectCard } from '~/components/ProjectCard/build'
import { List } from '~/components/List/List'
import type { IProjectsListProps } from './__types__/ProjectsList.types'
import './ProjectsList.scss'

export const ProjectsList: FC<IProjectsListProps> = ({
  projects,
  className,
  ...props
}) => {
  return <List {...props}
    className={cnProjectsList({}, [className])}
    items={projects} itemComponent={ProjectCard} itemPropKey='project' />
}
