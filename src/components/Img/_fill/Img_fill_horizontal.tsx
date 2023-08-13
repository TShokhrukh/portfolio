import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnImg } from '../Img.const'
import type { IImgProps, IImgFillHorizontalProps } from '../__types__'
import './Img_fill_horizontal.scss'

export const withImgFillHorizontal = withBemMod<IImgFillHorizontalProps, IImgProps>(
  cnImg(),
  { fill: 'horizontal' },
  (Img) => function ImgFillHorizontal (props) {
    return <Img {...props} fill={undefined} />
  }
)
