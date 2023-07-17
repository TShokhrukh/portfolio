import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnTypography } from '../Typography.const'
import type { ITypographyProps, ITypographyVariantH5Props } from '../__types__'

import './Typography_variant_h5.scss'

export const withTypographyVariantH5 = withBemMod<ITypographyVariantH5Props, ITypographyProps>(
  cnTypography(),
  { variant: 'h5' },
  (Typography) => function TypographyVariantH5 (props) {
    return <Typography {...props} component='h5' variant={undefined} />
  }
)
