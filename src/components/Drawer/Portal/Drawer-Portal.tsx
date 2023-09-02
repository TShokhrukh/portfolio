import React, { FC } from 'react'
import { observer } from 'mobx-react'
import { createPortal } from 'react-dom'
import ClickAwayListener from 'react-click-away-listener'
import { useDrawerContext } from '../lib/context'
import { useDrawerToggle } from '../lib/useDrawerToggle'
import { cnDrawer } from '../Drawer.const'
import { DrawerHeader } from '../Header'
import { DrawerBody } from '../Body'

export const DrawerPortal: FC = observer(
  function DrawerPortalView () {
    const { viewModel } = useDrawerContext()
    const { mask, portal, showPortal } = useDrawerToggle(viewModel.isOpen)

    if (!showPortal) {
      return null
    }

    const portalContent = (
      <div className={cnDrawer({}, [])}>
        <div ref={mask} className={cnDrawer('Mask', {})} />
        <div ref={portal} className={cnDrawer('Wrapper', {})} aria-modal='true' role='dialog'>
          <ClickAwayListener onClickAway={viewModel.close}>
            <div className={cnDrawer('Content', {})}>
              <DrawerHeader />
              <DrawerBody />
            </div>
          </ClickAwayListener>
        </div>
      </div>
    )

    return createPortal(portalContent, document.body)
  }
)
