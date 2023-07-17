import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH2Props } from '../__types__'

import './Typography_variant_h2.scss'

export const withTypographyVariantH2 = withBemMod<ITypographyVariantH2Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h2' },
  (Typography) => function TypographyVariantH2 (props) {
    return <Typography {...props} component='h2' variant={undefined} />
  }
)
