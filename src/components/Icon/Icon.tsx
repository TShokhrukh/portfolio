import React, { FC } from 'react'
import FontAwesomeIcon from 'react-fontawesome'
import faStyles from 'font-awesome/css/font-awesome.css'
import { cnIcon } from './Icon.const'
import type { IIconProps } from './__types__'

export const Icon: FC<IIconProps> = ({
  name,
  className,
  ...props
}) => (
  <FontAwesomeIcon {...props} name={name} cssModule={faStyles} className={cnIcon({}, [className])} />
)
