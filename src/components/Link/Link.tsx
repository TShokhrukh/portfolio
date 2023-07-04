import React from 'react'

import { cnLink } from './Link.const'
import { LinkIcon } from './Icon/Link-Icon'
import type { ILinkProps } from './__types__'
import './Link.scss'

export const Link: React.FC<ILinkProps> = ({
  className,
  href,
  children,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <a {...props} className={cnLink({}, [className])} href={href}>
      {startIcon && <LinkIcon icon={startIcon} direction='start' />}
      {children}
      {endIcon && <LinkIcon icon={endIcon} direction='end' />}
    </a>
  )
}
