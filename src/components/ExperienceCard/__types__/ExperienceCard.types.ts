import type { ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { TLocale } from '~/types'

interface IExperienceLocales {
  body?: string,
  skill?: string
}

export interface IExperience {
  icon?: string,
  locales: TLocale<IExperienceLocales>
}

export interface IExperienceCardProps extends IClassNameProps {
  component?: ElementType,
  experience: IExperience
}

export interface IExperienceCardContext {
  icon?: string,
  locales: TLocale<IExperienceLocales>
}
