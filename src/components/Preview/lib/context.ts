import { createContext, useContext } from 'react'
import type { IPreviewContext } from '../__types__'

export const Context = createContext<IPreviewContext>(null as any)

export const usePreviewContext = (): IPreviewContext => {
  const c = useContext<IPreviewContext>(Context)
  if (!c) {
    throw new Error('PreviewContext has not been set')
  }
  return c
}
