import React, { FC, useContext } from 'react'
import { Badge } from '~/components/Badge'
import { cnProjectCard, Context } from '../ProjectCard.const'
import type { IProjectCardContext } from '../__types__'
import './ProjectCard-Stacks.scss'

export const ProjectCardStacks: FC = () => {
  const { project } = useContext<IProjectCardContext>(Context)
  return (
    <div className={cnProjectCard('Stacks', [])}>
      {project.stack.map((s, i) => <div key={i}><Badge color='purple'>{s}</Badge></div>)}
    </div>
  )
}
