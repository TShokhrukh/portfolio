import type { ComponentType } from 'react'
import type { IIconProps } from './Button.types'

export interface IButtonIconProps {
  icon: ComponentType<IIconProps>,
  direction: 'start'|'end'
}
