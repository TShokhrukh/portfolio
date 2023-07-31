import { createContext } from 'react'
import { cn } from '@bem-react/classname'
import type { IProjectCardContext } from './__types__'

export const cnProjectCard = cn('ProjectCard')

export const Context = createContext<IProjectCardContext>(null!)
