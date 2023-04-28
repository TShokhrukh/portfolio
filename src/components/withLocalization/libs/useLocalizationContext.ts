import { useContext } from 'react'
import { LocalizationContext } from './context'
import type { ILocalizationService } from '../__types__'

export const useLocalizationContext = (): ILocalizationService => {
  const localizationService = useContext(LocalizationContext)

  if (!localizationService) {
    throw new Error('LocalizationContext context has been set')
  }

  return localizationService
}
