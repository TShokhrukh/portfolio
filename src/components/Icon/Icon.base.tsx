import React, { FC } from 'react'
import { cnIcon } from './Icon.const'
import type { IIconProps } from './__types__'

import './Icon.scss'

export const IconBase: FC<IIconProps> = ({
  name,
  className,
  ...props
}) => (
  <i {...props} className={cnIcon({}, [className])}
    >{name}</i>
)
