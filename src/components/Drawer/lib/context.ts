import { createContext, useContext } from 'react'
import type { IDrawerContext } from '../__types__'

export const Context = createContext<IDrawerContext>(null as any)

export const useDrawerContext = (): IDrawerContext => {
  const c = useContext<IDrawerContext>(Context)
  if (!c) {
    throw new Error('DrawerContext has not been set')
  }
  return c
}
