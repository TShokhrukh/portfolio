import React from 'react'
import { Icon } from '~/components/Icon/build'
import SocialLink from '../SocialLink'
import { cnPreview, social } from '../Preview.const'

export const PreviewSocial = () => {
  return (
    <div className={cnPreview('Social')}>
      { social.map((s, i) => (
        <SocialLink key={i} href={s.href} target='_blank' rel='noopener noreferrer'>
          <Icon name={s.icon} />
        </SocialLink>
      )) }
    </div>
  )
}
