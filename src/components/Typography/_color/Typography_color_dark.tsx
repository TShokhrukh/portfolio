import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyColorDarkProps } from '../__types__'

import './Typography_color_dark.scss'

export const withTypographyColorDark = withBemMod<ITypographyColorDarkProps, ITypographyProps>(
  cnTypography(),
  { color: 'dark' },
  (Typography) => function TypographyVariantBody (props) {
    return <Typography {...props} color={undefined} />
  }
)
