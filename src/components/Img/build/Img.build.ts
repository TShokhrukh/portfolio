import { compose, composeU } from '@bem-react/core'
import { Img as ImgBase } from '../Img'
import { withImgFillHorizontal, withImgFillVertical } from '../_fill'

export const Img = compose(
  composeU(withImgFillHorizontal, withImgFillVertical)
)(ImgBase)
