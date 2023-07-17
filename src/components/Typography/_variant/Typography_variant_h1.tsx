import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH1Props } from '../__types__'

import './Typography_variant_h1.scss'

export const withTypographyVariantH1 = withBemMod<ITypographyVariantH1Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h1' },
  (Typography) => function TypographyVariantH1 (props) {
    return <Typography {...props} component='h1' variant={undefined} />
  }
)
