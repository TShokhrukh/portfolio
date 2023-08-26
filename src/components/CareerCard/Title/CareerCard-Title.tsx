import React, { FC } from 'react'
import { Typography } from '~/components/Typography/build'
import { cnCareerCard } from '../CareerCard.const'
import './CareerCard-Title.scss'

export const CareerCardTitle: FC<{ children: any }> = ({ children }) => {
  return (
    <Typography className={cnCareerCard('Title', {})} variant='h5' color='white'>
      {children}
    </Typography>
  )
}
