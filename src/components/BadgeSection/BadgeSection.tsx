import React, { FC } from 'react'
import { Typography } from '~/components/Typography/build'
import { Badge } from '~/components/Badge/build'
import { cnBadgeSection } from './BadgeSection.const'
import type { IBadgeSectionProps } from './__types__'
import './BadgeSection.scss'

export const BadgeSection: FC<IBadgeSectionProps> = ({
  badge,
  title,
  children,
  className,
  component: Component = 'div',
  ...props
}) => {
  return (
    <Component {...props} className={cnBadgeSection({}, [className])}>
      <div className={cnBadgeSection('Head', {})}>
        <Badge color='purple' className={cnBadgeSection('Badge', {})}>
          {badge}
        </Badge>
        <Typography variant='h3' color='white' className={cnBadgeSection('Title', {})}>
          {title}
        </Typography>
      </div>
      <div className={cnBadgeSection('Body', {})}>
        {children}
      </div>
    </Component>
  )
}
