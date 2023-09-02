import React from 'react'
import { Container } from '~/components/Container'
import { Skills } from '~/components/Skills'
import { cnApp } from '../App.const'
import { useAppContext } from '../libs/context'
import './App-Skills.scss'

export const AppSkills: React.FC = () => {
  const { skills } = useAppContext()
  return (
    <section id='skills' className={cnApp('Skills')}>
      <Container className={cnApp('SkillsContainer')}>
        <Skills skills={skills} />
      </Container>
    </section>
  )
}
