import { cn } from '@bem-react/classname'
import { environment } from '~/environment'

export const cnDrawer = cn('Drawer')

export const DRAWER_ANIMATION_PORTAL_DURATION = environment.animations.drawer?.duration || environment.animations.duration
export const DRAWER_ANIMATION_MASK_DURATION = DRAWER_ANIMATION_PORTAL_DURATION - 50
