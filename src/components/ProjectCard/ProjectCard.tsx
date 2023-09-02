import React, { FC } from 'react'
import { useTranslator } from '@eo-locale/react'
import { Card } from '~/components/Card'
import { Link } from '~/components/Link'
import { Typography } from '~/components/Typography'
import { Context, cnProjectCard } from './ProjectCard.const'
import { ProjectCardStacks } from './Stacks/ProjectCard-Stacks'
import { ProjectCardImg } from './Img'
import type { IProjectCardProps } from './__types__'
import './ProjectCard.scss'

export const ProjectCard: FC<IProjectCardProps> = ({
  project,
  ...props
}) => {
  const t = useTranslator()
  return (
    <Context.Provider value={{ project }}>
      <Card {...props} component={(props) => <Link {...props} href={project.href} target='_blank' rel='noopener noreferrer'/>} className={cnProjectCard({}, [])}>
        <Typography color='white'>{project.name}</Typography>
        <Typography className={cnProjectCard('Desc', [])}>{project.desc[t.language]}</Typography>
        <ProjectCardStacks />
        <ProjectCardImg />
      </Card>
    </Context.Provider>
  )
}
