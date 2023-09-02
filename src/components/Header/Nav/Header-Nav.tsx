import React, { FC } from 'react'
import { Nav } from '~/components/Nav'
import { useHeaderContext } from '../lib/context'
import { cnHeader } from '../Header.const'
import type { IHeaderNavProps } from '../__types__'
import './Header-Nav.scss'

export const HeaderNav: FC<IHeaderNavProps> = ({ direction, ...props }) => {
  const { links, activeLink } = useHeaderContext()

  return <Nav {...props} direction={direction} links={links} active={activeLink} className={cnHeader('Nav')} />
}
