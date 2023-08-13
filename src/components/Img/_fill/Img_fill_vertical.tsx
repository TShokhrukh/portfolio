import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnImg } from '../Img.const'
import type { IImgProps, IImgFillVerticalProps } from '../__types__'
import './Img_fill_vertical.scss'

export const withImgFillVertical = withBemMod<IImgFillVerticalProps, IImgProps>(
  cnImg(),
  { fill: 'vertical' },
  (Img) => function ImgFillVertical (props) {
    return <Img {...props} fill={undefined} />
  }
)
