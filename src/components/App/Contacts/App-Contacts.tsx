import React, { FC } from 'react'
import { Container } from '~/components/Container'
import { AboutMe } from '~/components/AboutMe'
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
