import { compose, composeU } from '@bem-react/core'
import { Typography as TypographyBase } from '../Typography'
import {
  withTypographyVariantBody,
  withTypographyVariantSpan,
  withTypographyVariantH1,
  withTypographyVariantH2,
  withTypographyVariantH3,
  withTypographyVariantH4,
  withTypographyVariantH5,
  withTypographyVariantH6
} from '../_variant'
import {
  withTypographyColorWhite,
  withTypographyColorDark,
  withTypographyColorPurple,
  withTypographyColorRose
} from '../_color'

export const Typography = compose(
  composeU(
    withTypographyVariantBody,
    withTypographyVariantSpan,
    withTypographyVariantH1,
    withTypographyVariantH2,
    withTypographyVariantH3,
    withTypographyVariantH4,
    withTypographyVariantH5,
    withTypographyVariantH6
  ),
  composeU(
    withTypographyColorWhite,
    withTypographyColorPurple,
    withTypographyColorDark,
    withTypographyColorRose
  )
)(TypographyBase)
