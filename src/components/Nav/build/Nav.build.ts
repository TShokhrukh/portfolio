import { compose } from '@bem-react/core'
import { Nav as NavBase } from '../Nav'
import { withNavDirectionHorizontal } from '../_direction'

export const Nav = compose(
  withNavDirectionHorizontal
)(NavBase)
