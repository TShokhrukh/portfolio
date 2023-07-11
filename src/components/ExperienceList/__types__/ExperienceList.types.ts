import type { ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { IExperience } from '~/components/ExperienceCard/__types__'

interface IExperienceList extends IExperience {
  id: string
}

export interface IExperienceListProps extends IClassNameProps {
  component?: ElementType,
  experience: IExperienceList[]
}
