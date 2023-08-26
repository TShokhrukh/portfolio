import React, { FC } from 'react'
import { useTranslator } from '@eo-locale/react'
import { Card } from '~/components/Card/build'
import { cnCareerCard } from './CareerCard.const'
import { Context } from './lib/context'
import type { ICareerCardProps } from './__types__'
import { CareerCardTitle } from './Title'
import { CareerCardDesc } from './Desc'
import { CareerCardWorking } from './Working'
import './CareerCard.scss'

export const CareerCard: FC<ICareerCardProps> = ({ career, className, ...props }) => {
  const t = useTranslator()
  return (
    <Context.Provider value={{ career }}>
      <Card {...props} className={cnCareerCard({ active: career.active }, [className])}>
        <CareerCardTitle>{career.title}</CareerCardTitle>
        <CareerCardDesc>{career.desc[t.language]}</CareerCardDesc>
        <CareerCardWorking />
      </Card>
    </Context.Provider>
  )
}
