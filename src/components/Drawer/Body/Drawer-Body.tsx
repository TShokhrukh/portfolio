import React, { FC } from 'react'
import { useDrawerContext } from '../lib/context'
import { cnDrawer } from '../Drawer.const'
import './Drawer-Body.scss'

export const DrawerBody: FC = () => {
  const { children } = useDrawerContext()
  return (
    <div className={cnDrawer('Body')}>
      {children}
    </div>
  )
}
