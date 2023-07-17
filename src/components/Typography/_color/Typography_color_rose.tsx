import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyColorRoseProps } from '../__types__'

import './Typography_color_rose.scss'

export const withTypographyColorRose = withBemMod<ITypographyColorRoseProps, ITypographyProps>(
  cnTypography(),
  { color: 'rose' },
  (Typography) => function TypographyVariantBody (props) {
    return <Typography {...props} color={undefined} />
  }
)
