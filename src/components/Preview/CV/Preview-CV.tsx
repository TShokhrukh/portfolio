import React from 'react'
import { Text } from '@eo-locale/react'
import { Icon } from '~/components/Icon/build'
import { Button } from '~/components/Button/build'

import { cnPreview } from '../Preview.const'
import './Preview-CV.scss'

export const PreviewCV = () => {
  return (
    <div className={cnPreview('CV')}>
      <Button startIcon={({ className }) => <Icon name='telegram' className={className} />}>
        <Text html id='preview.talk' />
      </Button>
    </div>
  )
}
