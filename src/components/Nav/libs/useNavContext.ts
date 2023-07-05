import { useContext } from 'react'
import { NavContext } from './context'
import type { INavContext } from '../__types__'

export const useNavContext = (): INavContext => {
  const value = useContext(NavContext)

  if (!value) {
    throw new Error('NavContext has not been set')
  }

  return value
}
