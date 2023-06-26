import { withBemMod } from '@bem-react/core'
import { cnButton } from '../Button.const'
import type { IButtonProps, IButtonDisabled } from '../__types__'

import './Button_disabled.scss'

export const withButtonDisabled = withBemMod<IButtonDisabled, IButtonProps>(
  cnButton(),
  { disabled: true }
)
