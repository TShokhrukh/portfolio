import React from 'react'
import { Text } from '@eo-locale/react'
import { compose } from '@bem-react/core'
import { Badge as BadgeBase } from '~/components/Badge/Badge'
import { withBadgeColorPurple } from '~/components/Badge/_color/Badge_color_purple'

import { cnPreview } from '../Preview.const'
import './Preview-About.scss'

const Badge = compose(withBadgeColorPurple)(BadgeBase)

export const PreviewAbout = () => {
  return (
    <div className={cnPreview('About')}>
      <Badge color='purple' className={cnPreview('AboutBadge')}>
        <Text id='preview.greeting' />
      </Badge>
      <h1 className={cnPreview('AboutTitle')}>
        <Text html id='preview.name' />
      </h1>
      <p className={cnPreview('AboutDesc')}>
        <Text html id='preview.skills' />
      </p>
    </div>
  )
}
