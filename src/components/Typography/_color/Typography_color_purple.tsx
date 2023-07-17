import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyColorPurpleProps } from '../__types__'

import './Typography_color_purple.scss'

export const withTypographyColorPurple = withBemMod<ITypographyColorPurpleProps, ITypographyProps>(
  cnTypography(),
  { color: 'purple' },
  (Typography) => function TypographyVariantBody (props) {
    return <Typography {...props} color={undefined} />
  }
)
