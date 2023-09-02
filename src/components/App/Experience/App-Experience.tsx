import React, { FC } from 'react'
import { ExperienceList } from '~/components/ExperienceList'
import { Container } from '~/components/Container'
import { cnApp } from '../App.const'
import { useAppContext } from '../libs/context'
import './App-Experience.scss'

export const AppExperience: FC = () => {
  const { experience } = useAppContext()
  return (
    <section id='experience' className={cnApp('Experience', {})}>
      <Container>
        <ExperienceList experience={experience} />
      </Container>
    </section>
  )
}
