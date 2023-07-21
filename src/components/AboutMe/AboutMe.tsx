import React, { FC } from 'react'
import { AboutMeAvatar } from './Avatar'
import { AboutMeDesc } from './Desc'
import { cnAboutMe } from './AboutMe.const'
import { Context } from './lib/context'
import type { IAboutMeProps } from './__types__'
import avatar from './res/avatar.png'
import './AboutMe.scss'

export const AboutMe: FC<IAboutMeProps> = ({
  component: Component = 'div',
  className,
  ...props
}) => {
  return (
    <Context.Provider value={{ avatar }}>
      <Component {...props} className={cnAboutMe({}, [className])}>
        <AboutMeAvatar />
        <AboutMeDesc />
      </Component>
    </Context.Provider>
  )
}
