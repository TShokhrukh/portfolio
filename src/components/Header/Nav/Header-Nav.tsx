import React from 'react'
import { Nav } from '~/components/Nav/build'
import { HeaderContext } from '../libs/context'
import { cnHeader } from '../Header.const'

import type { IHeaderContext } from '../__types__'
import './Header-Nav.scss'

export const HeaderNav = () => {
  const { links, activeLink } = React.useContext<IHeaderContext>(HeaderContext)

  return <Nav direction='horizontal' links={links} active={activeLink} className={cnHeader('Nav')} />
}
