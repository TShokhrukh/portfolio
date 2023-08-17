import { compose } from '@bem-react/core'
import { Badge as BadgeBase } from '../Badge'
import { withBadgeColorPurple } from '../_color/Badge_color_purple'

export const Badge = compose(
  withBadgeColorPurple
)(BadgeBase)
