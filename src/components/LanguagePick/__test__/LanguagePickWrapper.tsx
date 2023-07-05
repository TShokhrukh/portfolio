import React, { ReactNode } from 'react'
import { TranslationsProvider } from '@eo-locale/react'

import type { Locale } from '@eo-locale/core'

interface IWrapperProps {
  children: ReactNode
}

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      language: {
        en: 'en',
        ru: 'ru',
        uz: 'uz'
      }
    }
  }
]

export const LanguagePickWrapper: React.FC<IWrapperProps> = ({ children }) => {
  return (
    <TranslationsProvider language='en' locales={locales} onError={() => null}>
      {children}
    </TranslationsProvider>
  )
}
