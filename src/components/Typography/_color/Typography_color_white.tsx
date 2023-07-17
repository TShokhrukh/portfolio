import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyColorWhiteProps } from '../__types__'

import './Typography_color_white.scss'

export const withTypographyColorWhite = withBemMod<ITypographyColorWhiteProps, ITypographyProps>(
  cnTypography(),
  { color: 'white' },
  (Typography) => function TypographyVariantBody (props) {
    return <Typography {...props} color={undefined} />
  }
)
