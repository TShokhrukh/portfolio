import { compose } from '@bem-react/core'
import { Button as ButtonBase } from '../Button'
import { withButtonVariantLink } from '../_variant'
import { withButtonDisabled } from '../_disabled'
import { withButtonRounded } from '../_rounded'

export const Button = compose(
  withButtonVariantLink,
  withButtonDisabled,
  withButtonRounded
)(ButtonBase)
