import React from 'react'
import { cnPreview } from './Preview.const'
import PreviewSocial from './Social'
import PreviewContainer from './Container'
import PreviewAbout from './About'
import PreviewCV from './CV'
import PreviewContent from './Content'

import type { IPreviewProps } from './__types__'

import './Preview.scss'

export const Preview: React.FC<IPreviewProps> = ({
  component: Component = 'div',
  className,
  ...props
}) => {
  return (
    <Component {...props} className={cnPreview({}, [className])}>
      <div className='Preview_mobile'>
        <PreviewContainer >
          <PreviewSocial />
          <div className='Preview_bg' />
          <div>
            <PreviewAbout />
            <PreviewCV />
          </div>
        </PreviewContainer>
      </div>
      <div className='Preview_desktop Preview_bg'>
        <PreviewContainer>
          <PreviewContent className={cnPreview('Content')}>
            <div>
              <PreviewAbout />
              <PreviewSocial />
            </div>
            <PreviewCV />
          </PreviewContent>
        </PreviewContainer>
      </div>
    </Component>
  )
}
