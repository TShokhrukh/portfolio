import React, { FC } from 'react'
import { Button } from '~/components/Button/build'
import { Icon } from '~/components/Icon/build'
import { useDrawerContext } from '../lib/context'
import { cnDrawer } from '../Drawer.const'
import './Drawer-Header.scss'

export const DrawerHeader: FC = () => {
  const { title, viewModel } = useDrawerContext()
  return (
    <div className={cnDrawer('Header')}>
      <div className={cnDrawer('Title', {})}>{title}</div>
      <Button className={cnDrawer('Close', {})} onClick={viewModel.close}>
        <Icon name='close' />
      </Button>
    </div>
  )
}
