import React from 'react'
import { Drawer } from '~/components/Drawer'
import { Icon } from '~/components/Icon'
import { Button } from '~/components/Button'
import { cnHeader } from './Header.const'
import { HeaderContainer } from './Container'
import { HeaderNav } from './Nav'
import { HeaderLanguagePick } from './LanguagePick'
import { HeaderLogo } from './Logo'
import { HeaderContext } from './lib/context'
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
          <div className={cnHeader('Navbar', { desktop: true })}>
            <HeaderNav direction='horizontal' />
          </div>
          <div className={cnHeader('Navbar', { mobile: true })}>
            <Drawer viewModel={viewModel.drawer} target={({ onClick }) => (
              <Button onClick={onClick} className={cnHeader('BarsBtn', {})}>
                <Icon name='bars' />
              </Button>
            )} title={<HeaderLogo />}>
              <HeaderNav direction='vertical' onClick={viewModel.drawer.close} />
            </Drawer>
          </div>
          <HeaderLanguagePick />
        </HeaderContainer>
      </header>
    </HeaderContext.Provider>
  )
}
