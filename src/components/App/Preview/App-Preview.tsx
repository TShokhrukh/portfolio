import React, { FC } from 'react'
import { Preview } from '~/components/Preview'
import { environment } from '~/environment'
import { cnApp } from '../App.const'
import './App-Preview.scss'

export const AppPreview: FC = () => {
  return (
    <section id='preview' className={cnApp('Preview', { fullscreen: true })}>
      <Preview telegram={environment.contacts.telegram} />
    </section>
  )
}
