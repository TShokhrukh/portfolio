import React, { FC, useContext } from 'react'
import { Img } from '~/components/Img'
import { Context, cnProjectCard } from '../ProjectCard.const'
import type { IProjectCardContext } from '../__types__'
import './ProjectCard-Img.scss'

export const ProjectCardImg: FC = () => {
  const { project } = useContext<IProjectCardContext>(Context)

  return (
    <div className={cnProjectCard('Image', [])}>
      <Img alt={project.name} src={project.image} fill='horizontal' />
    </div>
  )
}
