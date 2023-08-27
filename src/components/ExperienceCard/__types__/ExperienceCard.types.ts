import type { ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { IExperience } from '~/types'

export interface IExperienceCardProps extends IClassNameProps {
  component?: ElementType,
  experience: IExperience
}

export interface IExperienceCardContext extends Omit<IExperience, 'id'> {

}

export {
  IExperience
}
