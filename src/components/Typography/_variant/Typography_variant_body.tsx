import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantBodyProps } from '../__types__'

import './Typography_variant_body.scss'

export const withTypographyVariantBody = withBemMod<ITypographyVariantBodyProps, ITypographyProps>(
  cnTypography(),
  { variant: 'body' },
  (Typography) => function TypographyVariantBody (props) {
    return <Typography {...props} component='p' variant={undefined} />
  }
)
