import React, { FC } from 'react'
import { useDrawerContext } from '../lib/context'
import { cnDrawer } from '../Drawer.const'
import './Drawer-Target.scss'

export const DrawerTarget: FC = () => {
  const { target: Target, viewModel } = useDrawerContext()

  return <Target className={cnDrawer('Target')} onClick={viewModel.toggle} />
}
