import React, { FC } from 'react'
import { DrawerTarget } from './Target'
import { DrawerPortal } from './Portal'
import { Context } from './lib/context'
import type { IDrawerProps } from './__types__'

import './Drawer.scss'

export const Drawer: FC<IDrawerProps> = ({
  target,
  viewModel,
  title,
  children
}) => {
  return (
    <Context.Provider value={{ viewModel, children, title, target }}>
      <DrawerTarget />
      <DrawerPortal />
    </Context.Provider>
  )
}
