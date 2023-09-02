import React from 'react'
import { Text } from '@eo-locale/react'
import { Icon } from '~/components/Icon'
import { Button } from '~/components/Button'
import { cnPreview } from '../Preview.const'
import { usePreviewContext } from '../lib/context'
import './Preview-CV.scss'

export const PreviewCV = () => {
  const { telegram } = usePreviewContext()

  return (
    <div className={cnPreview('CV')}>
      <Button variant='link' href={telegram} target='_blank' rel='noopener noreferrer'
        startIcon={({ className }) => <Icon name='telegram' className={className} />}>
        <Text html id='preview.talk' />
      </Button>
    </div>
  )
}
