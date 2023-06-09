import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnButton } from '../Button.const'
import type { IButtonProps, IButtonVariantLinkProps } from '../__types__'
import './Button_variant_link.scss'

export const withButtonVariantLink = withBemMod<IButtonVariantLinkProps, IButtonProps>(
  cnButton(),
  { variant: 'link' },
  (Button) => function ButtonTypeLink (props) {
    return <Button {...props} component='a' />
  }
)
