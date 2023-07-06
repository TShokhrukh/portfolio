import React from 'react'
import { cnPreview } from '../Preview.const'
import type { IPreviewContentProps } from '../__types__'
import './Preview-Content.scss'

export const PreviewContent: React.FC<IPreviewContentProps> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={cnPreview('Content', [className])} />
  )
}
