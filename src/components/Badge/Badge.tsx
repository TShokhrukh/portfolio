import React from 'react'
import { cnBadge } from './Badge.const'
import type { IBadgeProps } from './__types__'

import './Badge.scss'

export const Badge: React.FC<IBadgeProps> = ({
  component: Component = 'span',
  className,
  children,
  ...props
}) => {
  return (
    <Component {...props} className={cnBadge({}, [className])}
      >{children}</Component>
  )
}
