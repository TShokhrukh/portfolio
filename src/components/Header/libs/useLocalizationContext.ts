import { useContext } from 'react'
import { HeaderContext } from './context'
// import type { ILocalizationService } from '../__types__'

export const useLocalizationContext = (): any => {
  const value = useContext(HeaderContext)

  if (!value) {
    throw new Error('LocalizationContext has not been set')
  }

  return value
}
