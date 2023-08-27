import React, { FC } from 'react'
import { Container } from '~/components/Container/build'
import { AboutMe } from '~/components/AboutMe/AboutMe'
import { cnApp } from '../App.const'

import './App-AboutMe.scss'

export const AppAboutMe: FC = () => {
  return (
    <section id='about_me' className={cnApp('AboutMe', {})}>
      <Container>
        <AboutMe />
      </Container>
    </section>
  )
}
