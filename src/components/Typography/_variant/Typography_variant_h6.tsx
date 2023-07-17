import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH6Props } from '../__types__'

import './Typography_variant_h6.scss'

export const withTypographyVariantH6 = withBemMod<ITypographyVariantH6Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h6' },
  (Typography) => function TypographyVariantH6 (props) {
    return <Typography {...props} component='h6' variant={undefined} />
  }
)
