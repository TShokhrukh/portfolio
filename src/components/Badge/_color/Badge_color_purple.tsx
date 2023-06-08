import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnBadge } from '../Badge.const'

import type { IBadgeColorProps, IBadgeProps } from '../__types__'

import './Badge_color_purple.scss'

export const withBadgeColorPurple = withBemMod<IBadgeColorProps, IBadgeProps>(
  cnBadge(),
  { color: 'purple' },
  // eslint-disable-next-line react/prop-types
  (Badge) => function BadgeColorPurple ({ color: _color, ...props }) {
    return <Badge {...props} />
  }
)
