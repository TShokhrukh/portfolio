import React from 'react'
import { cnPreview } from './Preview.const'
import { Context } from './lib/context'
import PreviewSocial from './Social'
import PreviewContainer from './Container'
import PreviewAbout from './About'
import PreviewCV from './CV'
import type { IPreviewProps } from './__types__'
import './Preview.scss'

export const Preview: React.FC<IPreviewProps> = ({
  component: Component = 'div',
  className,
  telegram,
  ...props
}) => {
  return (
    <Context.Provider value={{ telegram }}>
      <Component {...props} className={cnPreview({}, [className])}>
        <div className={cnPreview('Inner', { mobile: true })}>
          <PreviewContainer>
            <PreviewSocial />
            <div className={cnPreview('Background')} />
            <div>
              <PreviewAbout />
              <PreviewCV />
            </div>
          </PreviewContainer>
        </div>
        <div className={cnPreview('Inner', { desktop: true })}>
          <PreviewContainer>
            <div className={cnPreview('Content')}>
              <div>
                <PreviewAbout />
                <PreviewSocial />
              </div>
              <PreviewCV />
            </div>
          </PreviewContainer>
        </div>
      </Component>
    </Context.Provider>
  )
}
