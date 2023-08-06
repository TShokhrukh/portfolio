import { createContext } from 'react'
import { cn } from '@bem-react/classname'
import type { ISkillsContext } from './__types__'

export const cnSkills = cn('Skills')

export const Context = createContext<ISkillsContext>(null!)
