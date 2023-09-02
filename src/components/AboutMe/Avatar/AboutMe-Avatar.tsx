import React, { useContext, FC } from 'react'
import { cnAboutMe } from '../AboutMe.const'
import { Img } from '~/components/Img'
import { Context } from '../lib/context'
import type { IAboutMeContext } from '../__types__'

import './AboutMe-Avatar.scss'

export const AboutMeAvatar: FC = () => {
  const { avatar } = useContext<IAboutMeContext>(Context)
  return (
    <Img src={avatar} className={cnAboutMe('Avatar', {})} />
  )
}
