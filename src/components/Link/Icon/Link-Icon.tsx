import React from 'react'

import { cnLink } from '../Link.const'
import type { ILinkIconProps } from '../__types__'

import './Link-Icon.scss'

export const LinkIcon: React.FC<ILinkIconProps> = ({
  direction,
  icon: Icon
}) => {
  return <Icon className={cnLink('Icon', { direction })} />
}
