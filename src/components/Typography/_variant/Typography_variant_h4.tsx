import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH4Props } from '../__types__'

import './Typography_variant_h4.scss'

export const withTypographyVariantH4 = withBemMod<ITypographyVariantH4Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h4' },
  (Typography) => function TypographyVariantH4 (props) {
    return <Typography {...props} component='h4' variant={undefined} />
  }
)
