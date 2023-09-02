import { createContext, useContext } from 'react'
import type { IHeaderContext } from '../__types__'

export const HeaderContext = createContext<IHeaderContext>(null!)

export const useHeaderContext = (): IHeaderContext => {
  const c = useContext<IHeaderContext>(HeaderContext)
  if (!c) {
    throw new Error('HeaderContext has not been set')
  }
  return c
}
