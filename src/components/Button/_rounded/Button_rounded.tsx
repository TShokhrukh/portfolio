import { withBemMod } from '@bem-react/core'
import { cnButton } from '../Button.const'
import type { IButtonProps, IButtonRounded } from '../__types__'

import './Button_rounded.scss'

export const withButtonRounded = withBemMod<IButtonRounded, IButtonProps>(
  cnButton(),
  { rounded: true }
)
