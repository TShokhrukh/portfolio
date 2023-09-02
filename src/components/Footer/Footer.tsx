import React, { FC } from 'react'
import { Icon } from '~/components/Icon'
import { FooterSocialLink } from './SocialLink'
import { FooterContent } from './Content'
import { cnFooter } from './Footer.const'
import { environment } from '~/environment'
import type { IFooterProps } from './__types__'
import './Footer.scss'

export const Footer: FC<IFooterProps> = ({
  component: Component = 'footer',
  className,
  ...props
}) => {
  return (
    <Component {...props} className={cnFooter({}, [className])}>
      <FooterContent>
        <FooterSocialLink href={environment.contacts.git} target='_blank' rel='noopener noreferrer'>
          <Icon name='github' />
        </FooterSocialLink>
      </FooterContent>
    </Component>
  )
}
