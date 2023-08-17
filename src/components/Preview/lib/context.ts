import { createContext, useContext } from 'react'
import type { IPreviewContext } from '../__types__'

export const Context = createContext<IPreviewContext>(null as any)

export const usePreviewContext = (): IPreviewContext => {
  return useContext<IPreviewContext>(Context)
}
