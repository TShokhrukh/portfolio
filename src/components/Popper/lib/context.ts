import { createContext, useContext } from 'react'
import type { TPopperContext } from '../__types__'

export const Context = createContext<TPopperContext>(null as any)

export const usePopperContext = (): TPopperContext => {
  const c = useContext<TPopperContext>(Context)
  if (!c) {
    throw new Error('PopperContext has not been set')
  }
  return c
}
