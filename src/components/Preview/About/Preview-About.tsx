import React from 'react'
import { Text } from '@eo-locale/react'
import { Badge } from '~/components/Badge'

import { cnPreview } from '../Preview.const'
import './Preview-About.scss'

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
