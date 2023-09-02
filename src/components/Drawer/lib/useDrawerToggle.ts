import { useEffect } from 'react'
import { useSlideToggle } from '~/hooks/useSlideToggle'
import { useOpacityToggle } from '~/hooks/useOpacityToggle'
import { useBlockScroll } from '~/hooks/useBlockScroll'
import { DRAWER_ANIMATION_MASK_DURATION, DRAWER_ANIMATION_PORTAL_DURATION } from './../Drawer.const'

interface IDrawerToggle {
  portal: any,
  mask: any,
  showPortal: boolean
}

export const useDrawerToggle = (open: boolean): IDrawerToggle => {
  const { show: showPortal, target: portal } = useSlideToggle<HTMLDivElement>(open, DRAWER_ANIMATION_PORTAL_DURATION)
  const { target: mask } = useOpacityToggle<HTMLDivElement>(open, DRAWER_ANIMATION_MASK_DURATION)

  useBlockScroll(showPortal)

  useEffect(() => {
    document.body.style.overflowY = open ? 'hidden' : ''
  }, [open])
  useEffect(() => {
    return () => {
      document.body.style.overflowY = ''
    }
  }, [])

  return {
    mask,
    portal,
    showPortal
  }
}
