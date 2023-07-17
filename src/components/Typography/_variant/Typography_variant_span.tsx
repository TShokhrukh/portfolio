import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantSpanProps } from '../__types__'

import './Typography_variant_span.scss'

export const withTypographyVariantSpan = withBemMod<ITypographyVariantSpanProps, ITypographyProps>(
  cnTypography(),
  { variant: 'span' },
  (Typography) => function TypographyVariantspan (props) {
    return <Typography {...props} component='span' variant={undefined} />
  }
)
