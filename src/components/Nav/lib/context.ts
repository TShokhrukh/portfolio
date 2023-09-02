import { createContext } from 'react'
import type { INavContext } from '../__types__'

export const NavContext = createContext<INavContext>({ active: '' })
