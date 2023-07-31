import { createContext } from 'react'
import { cn } from '@bem-react/classname'
import { IListContext } from './__types__/List.types'

export const cnList = cn('List')

export const Context = createContext<IListContext>(null!)
