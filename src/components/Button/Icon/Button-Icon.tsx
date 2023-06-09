import React from 'react'

import { cnButton } from '../Button.const'
import type { IButtonIconProps } from '../__types__'

import './Button-Icon.scss'

export const ButtonIcon: React.FC<IButtonIconProps> = ({
  direction,
  icon: Icon
}) => {
  return <Icon className={cnButton('Icon', { direction })} />
}
