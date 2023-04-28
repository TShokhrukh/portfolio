import React, { useEffect, ComponentType } from 'react'
import { TranslationsProvider, useTranslator } from '@eo-locale/react'
import { observer } from 'mobx-react'
import type { TWrapperProps, ILocalizationService } from './__types__'
import { LocalizationContext } from './libs/context'
import { useLocalizationContext } from './libs/useLocalizationContext'

/**
 * component to assign the translator prop
 */
function WithLocalizationChild () {
  const t = useTranslator()
  const service = useLocalizationContext()
  useEffect(() => {
    service.translator = t
  }, [t])
  return null
}

export function withLocalization (service: ILocalizationService) {
  return function withLocalizationHOC<T extends ComponentType> (Component: T) {
    return observer(function withLocalizationWrapper (props: TWrapperProps<T>) {
      return (
        <LocalizationContext.Provider value={service}>
          <TranslationsProvider language={service.language} locales={service.locales}>
            <WithLocalizationChild />
            <Component {...props as any} />
          </TranslationsProvider>
        </LocalizationContext.Provider>
      )
    })
  }
}
