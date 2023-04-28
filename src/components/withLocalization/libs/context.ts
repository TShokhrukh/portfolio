import { createContext } from 'react'
import type { ILocalizationService } from '../__types__'

export const LocalizationContext = createContext<ILocalizationService|undefined>(undefined)
