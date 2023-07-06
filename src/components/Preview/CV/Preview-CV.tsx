import React from 'react'
import { Text } from '@eo-locale/react'
import { Icon } from '~/components/Icon/Icon'
import { Link } from '~/components/Link/Link'
import { Button } from '~/components/Button/Button'

import { cnPreview } from '../Preview.const'
import './Preview-CV.scss'

export const PreviewCV = () => {
  return (
    <div className={cnPreview('CV')}>
      <Link href='#adw' target='_black' className={cnPreview('CVLink')}
        endIcon={({ className }) => <Icon name='download' className={className} />}>
        <Text html id='preview.downloadCv' />
      </Link>
      <Button startIcon={({ className }) => <Icon name='telegram' className={className} />}>
        <Text html id='preview.talk' />
      </Button>
    </div>
  )
}
