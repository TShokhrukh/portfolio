import type { IClassNameProps } from '@bem-react/core'
import type { ElementType } from 'react'

export interface IExperienceCardIconProps extends IClassNameProps {

}

export interface IIconProps extends IClassNameProps {
  icon: ElementType<IExperienceCardIconProps>,
}
