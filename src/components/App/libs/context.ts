import { createContext, useContext } from 'react'
import type { IAppContext } from '../__types__'

export const Context = createContext<IAppContext>(null as any)

export const useAppContext = (): IAppContext => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('AppContext has not been set')
  }
  return context
}
