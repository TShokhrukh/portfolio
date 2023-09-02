import { compose, composeU } from '@bem-react/core'
import { Nav as NavBase } from '../Nav'
import { withNavDirectionHorizontal, withNavDirectionVertical } from '../_direction'

export const Nav = compose(
  composeU(withNavDirectionHorizontal, withNavDirectionVertical)
)(NavBase)
