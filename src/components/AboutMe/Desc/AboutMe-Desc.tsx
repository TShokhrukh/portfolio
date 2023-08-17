import React, { FC } from 'react'
import { Text } from '@eo-locale/react'
import { Badge } from '~/components/Badge/build'
import { Typography } from '~/components/Typography/build'
import { cnAboutMe } from '../AboutMe.const'

import './AboutMe-Desc.scss'

export const AboutMeDesc: FC = () => {
  return (
    <div className={cnAboutMe('Desc', {})}>
      <div>
        <Badge color='purple'>
          <Text id='aboutMe.aboutMe' />
        </Badge>
      </div>
      <Typography className={cnAboutMe('Name', {})} variant='h2' color='white'>
        <Text id='aboutMe.me' />
      </Typography>
      <Typography>
        <Text html id='aboutMe.desc' />
      </Typography>
    </div>
  )
}
