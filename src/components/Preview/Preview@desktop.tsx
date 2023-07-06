import React from 'react'
import { cnPreview } from './Preview.const'
import PreviewSocial from './Social'
import PreviewContainer from './Container'
import PreviewAbout from './About'
import PreviewCV from './CV'
import PreviewContent from './Content'

import type { IPreviewProps } from './__types__'

import './Preview.scss'
import './Preview@desktop.scss'

export const Preview: React.FC<IPreviewProps> = ({
  component: Component = 'div',
  className,
  ...props
}) => {
  return (
    <Component {...props} className={cnPreview({ desktop: true }, [className])}>
      <PreviewContainer>
        <PreviewContent>
          <div>
            <PreviewAbout />
            <PreviewSocial />
          </div>
          <PreviewCV />
        </PreviewContent>
      </PreviewContainer>
    </Component>
  )
}
