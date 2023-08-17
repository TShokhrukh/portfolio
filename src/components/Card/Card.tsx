import React, { FC } from 'react'
import { cnCard } from './Card.const'
import type { ICardProps } from './__types__'
import './Card.scss'

export const Card: FC<ICardProps> = ({
  component: Component = 'div',
  className,
  children,
  ...props
}) => {
  return (
    <Component {...props} className={cnCard({}, [className])}
      >{children}</Component>
  )
}
