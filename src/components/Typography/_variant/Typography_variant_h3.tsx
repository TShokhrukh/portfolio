import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH3Props } from '../__types__'

import './Typography_variant_h3.scss'

export const withTypographyVariantH3 = withBemMod<ITypographyVariantH3Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h3' },
  (Typography) => function TypographyVariantH3 (props) {
    return <Typography {...props} component='h3' variant={undefined} />
  }
)
