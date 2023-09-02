import React, { FC } from 'react'
import { ProjectCard } from '~/components/ProjectCard'
import { List } from '~/components/List'
import { cnProjectsList } from './ProjectsList.const'
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
