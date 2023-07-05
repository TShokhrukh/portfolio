import React from 'react'
import { cnNav } from './Nav.const'
import NavItem from './Item'
import type { INavProps } from './__types__'
import { NavContext } from './libs/context'

import './Nav.scss'

export const Nav: React.FC<INavProps> = ({
  className,
  links,
  active,
  ...props
}) => {
  return (
    <NavContext.Provider value={{ active }}>
      <nav {...props} className={cnNav({}, [className])}>
        <ul className={cnNav('List')}>
          { links.map((l) => (<NavItem key={l.href} link={l} />)) }
        </ul>
      </nav>
    </NavContext.Provider>
  )
}
