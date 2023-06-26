import React, { FC } from 'react'

import { ButtonIcon } from './Icon/Button-Icon'
import { cnButton } from './Button.const'
import type { IButtonProps, TRef } from './__types__'

import './Button.scss'

export const Button: FC<IButtonProps> = ({
  component: Component = 'button',
  type = 'button',
  children,
  className,
  startIcon,
  endIcon,
  innerRef,
  ...props
}) => {
  let ref: TRef = { ref: innerRef }

  if (typeof Component === 'function') {
    ref = { innerRef }
  }

  return (
    <Component {...props} {...(ref)}
      className={cnButton({}, [className])}
      type={type}>
      {startIcon && <ButtonIcon icon={startIcon} direction='start' />}
      {children}
      {endIcon && <ButtonIcon icon={endIcon} direction='end' />}
    </Component>
  )
}
