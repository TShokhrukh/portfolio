import React from 'react'
import { Text } from '@eo-locale/react'
import { Typography } from '~/components/Typography/build'
import { Container } from '~/components/Container/build'
import { ProjectsList } from '~/components/ProjectsList/build'
import { cnApp } from '../App.const'
import { useAppContext } from '../libs/context'
import './App-Projects.scss'

export const AppProjects: React.FC = () => {
  const { projects } = useAppContext()
  return (
    <section id='projects' className={cnApp('Projects')}>
      <Container>
        <Typography variant='h2' color='white' className={cnApp('ProjectsTitle')}>
          <Text id='projects.title' />
        </Typography>
        <ProjectsList projects={projects} />
      </Container>
    </section>
  )
}
