import React from 'react'
import { cnPreview } from './Preview.const'
import PreviewSocial from './Social'
import PreviewContainer from './Container'
import PreviewAbout from './About'
import PreviewCV from './CV'

import type { IPreviewProps } from './__types__'

import './Preview.scss'
import './Preview@mobile.scss'

export const Preview: React.FC<IPreviewProps> = ({
  component: Component = 'div',
  className,
  ...props
}) => {
  return (
    <Component {...props} className={cnPreview({ mobile: true }, [className])}>
      <PreviewContainer>
        <PreviewSocial />
        <div className={cnPreview('Background')} />
        <div>
          <PreviewAbout />
          <PreviewCV />
        </div>
      </PreviewContainer>
    </Component>
  )
}
