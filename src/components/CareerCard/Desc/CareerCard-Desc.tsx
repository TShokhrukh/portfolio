import React, { FC } from 'react'
import { Typography } from '~/components/Typography'
import { cnCareerCard } from '../CareerCard.const'
import './CareerCard-Desc.scss'

export const CareerCardDesc: FC<{ children: any }> = ({ children }) => {
  return (
    <Typography className={cnCareerCard('Desc', {})}>
      {children}
    </Typography>
  )
}
