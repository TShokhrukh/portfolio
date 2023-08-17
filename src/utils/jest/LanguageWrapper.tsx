import React, { ReactNode } from 'react'
import { TranslationsProvider } from '@eo-locale/react'

import type { Locale } from '@eo-locale/core'

interface IWrapperProps {
  children: ReactNode,
  language?: string,
  locales?: Locale[]
}

const defLocales: Locale[] = [
  {
    language: 'en',
    messages: {}
  }
]

export const LanguageWrapper: React.FC<IWrapperProps> = ({
  children,
  language = 'en',
  locales = defLocales
}) => {
  return (
    <TranslationsProvider language={language} locales={locales} onError={() => null}>
      {children}
    </TranslationsProvider>
  )
}
