import type { ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { TExperienceList, IExperience } from '~/types'

export interface IExperienceListProps extends IClassNameProps {
  component?: ElementType,
  experience: TExperienceList
}

export {
  IExperience,
  TExperienceList
}
