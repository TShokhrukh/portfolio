import { createContext, useContext } from 'react'
import { ICareerCardContext } from '../__types__'

export const Context = createContext<ICareerCardContext>(null as any)

export const useCareerCardContext = (): ICareerCardContext => {
  const c = useContext<ICareerCardContext>(Context)
  if (!c) {
    throw new Error('CareerCardContext has not been set')
  }
  return c
}
