import React, { ReactNode } from 'react'
import { TranslationsProvider } from '@eo-locale/react'

import type { Locale } from '@eo-locale/core'

interface IWrapperProps {
  children: ReactNode
}

const locales: Locale[] = [
  {
    language: 'en',
    messages: {}
  }
]

export const ExperienceCardWrapper: React.FC<IWrapperProps> = ({ children }) => {
  return (
    <TranslationsProvider language={'en'} locales={locales} onError={() => null}>
      {children}
    </TranslationsProvider>
  )
}
