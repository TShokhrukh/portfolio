import React, { FC } from 'react'
import { Container } from '~/components/Container'
import { Career } from '~/components/Career'
import { cnApp } from '../App.const'
import { useAppContext } from '../libs/context'
import './App-Career.scss'

export const AppCareer: FC = () => {
  const { careers } = useAppContext()
  return (
    <section id='career' className={cnApp('Career', {})}>
      <Container className={cnApp('CareerContainer', {})}>
        <Career careers={careers} />
      </Container>
    </section>
  )
}
