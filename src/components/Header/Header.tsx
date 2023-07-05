import React from 'react'
import { cnHeader } from './Header.const'
import { HeaderContainer } from './Container'
import { HeaderNav } from './Nav'
import { HeaderLanguagePick } from './LanguagePick'
import { HeaderLogo } from './Logo'
import { HeaderContext } from './libs/context'

import './Header.scss'

import type { IHeaderProps } from './__types__'

export const Header: React.FC<IHeaderProps> = ({
  className,
  links,
  activeLink,
  viewModel,
  ...props
}) => {
  return (
    <HeaderContext.Provider value={{ links, activeLink, viewModel }}>
      <header {...props} className={cnHeader({}, [className])}>
        <HeaderContainer>
          <HeaderLogo />
          <HeaderNav />
          <HeaderLanguagePick />
        </HeaderContainer>
      </header>
    </HeaderContext.Provider>
  )
}
