import React from 'react'

import { cnTypography } from './Typography.const'
import type { ITypographyProps } from './__types__'

import './Typography.scss'

export const Typography: React.FC<ITypographyProps> = ({
  component: Component = 'p',
  className,
  children,
  ...props
}) => {
  return (
    <Component {...props} className={cnTypography({}, [className])}
      >{children}</Component>
  )
}
