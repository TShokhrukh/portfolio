import React from 'react'
import { cnHeader } from '../Header.const'
import logo from '../assets/logo.svg'

export const HeaderLogo: React.FC = () => {
  return (
    <div className={cnHeader('Logo')}>
      <img alt='...' src={logo} className={cnHeader('LogoImage')} />
    </div>
  )
}
