import React from 'react'
import { cn } from '@bem-react/classname'
import type { IContainerProps } from './__types__'
import './Container.scss'

export const cnContainer = cn('Container')

export const Container: React.FC<IContainerProps> = ({
  id,
  className,
  children,
  ...props
}) => {
  return (
    <div {...props} id={id} className={cnContainer({}, [className])}>
      {children}
    </div>
  )
}
