import { compose } from '@bem-react/core'
import { Nav as NavBase } from '../../Nav'
import { withNavDirectionHorizontal } from '../../_direction/Nav_direction_horizontal'

export const Nav = compose(
  withNavDirectionHorizontal
)(NavBase)
