import React, { FC } from 'react'

import { ButtonIcon } from './Icon/Button-Icon'
import { cnButton } from './Button.const'
import type { IButtonProps } from './__types__'

import './Button.scss'

export const Button: FC<IButtonProps> = ({
  component: Component = 'button',
  type = 'button',
  children,
  className,
  disabled,
  rounded,
  startIcon,
  endIcon,
  ...props
}) => (
  <Component {...props}
    className={cnButton({ disabled, rounded }, [className])}
    type={type}
    disabled={disabled}>
    {startIcon && <ButtonIcon icon={startIcon} direction='start' />}
    {children}
    {endIcon && <ButtonIcon icon={endIcon} direction='end' />}
  </Component>
)
