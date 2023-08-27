import React, { FC } from 'react'
import { Text } from '@eo-locale/react'
import { BadgeSection } from '~/components/BadgeSection/build'
import { CareerList } from '~/components/CareerList/build'
import { cnCareer } from './Career.const'
import type { ICareerProps } from './__types__'
import './Career.scss'

export const Career: FC<ICareerProps> = ({ careers, className, ...props }) => {
  return (
    <BadgeSection {...props} badge={<Text id='career.badge' />} title={<Text id='career.title' />}
      className={cnCareer({}, [className])}>
      <CareerList careers={careers} className={cnCareer('List')} />
    </BadgeSection>
  )
}
