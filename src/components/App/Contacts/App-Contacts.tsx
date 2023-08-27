import React, { FC } from 'react'
import { Container } from '~/components/Container/build'
import { AboutMe } from '~/components/AboutMe/AboutMe'
import { cnApp } from '../App.const'

import './App-AboutMe.scss'

export const AppContacts: FC = () => {
  return (
    <section id='contacts' className={cnApp('Contacts', {})}>
      <Container>
        <AboutMe />
      </Container>
    </section>
  )
}
