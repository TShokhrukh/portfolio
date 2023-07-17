import { compose, composeU } from '@bem-react/core'
import { Typography as TypographyBase } from '../../Typography'
import { withTypographyVariantBody } from '../../_variant/Typography_variant_body'
import { withTypographyVariantSpan } from '../../_variant/Typography_variant_span'
import { withTypographyVariantH1 } from '../../_variant/Typography_variant_h1'
import { withTypographyVariantH2 } from '../../_variant/Typography_variant_h2'
import { withTypographyVariantH3 } from '../../_variant/Typography_variant_h3'
import { withTypographyVariantH4 } from '../../_variant/Typography_variant_h4'
import { withTypographyVariantH5 } from '../../_variant/Typography_variant_h5'
import { withTypographyVariantH6 } from '../../_variant/Typography_variant_h6'

import { withTypographyColorWhite } from '../../_color/Typography_color_white'
import { withTypographyColorPurple } from '../../_color/Typography_color_purple'
import { withTypographyColorDark } from '../../_color/Typography_color_dark'
import { withTypographyColorRose } from '../../_color/Typography_color_rose'

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
