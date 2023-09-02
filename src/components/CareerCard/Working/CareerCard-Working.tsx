import React, { FC, useMemo } from 'react'
import intervalToDuration from 'date-fns/intervalToDuration'
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'
import { Text } from '@eo-locale/react'
import type { Duration } from 'date-fns'
import { Typography } from '~/components/Typography'
import { cnCareerCard, dateFormat } from '../CareerCard.const'
import { useCareerCardContext } from '../lib/context'
import './CareerCard-Working.scss'

export const CareerCardWorking: FC = () => {
  const { career } = useCareerCardContext()
  const startDate = useMemo<Date>(() => parseISO(career.startDate), [career.startDate])
  const endDate = useMemo<Date|null>(() => career.endDate ? parseISO(career.endDate) : null, [career.endDate])
  const duration = useMemo<Duration>(() => {
    if (endDate && endDate < startDate) {
      throw new Error('endDate cannot be earlier than startDate')
    }
    return intervalToDuration({
      start: startDate,
      end: endDate || new Date()
    })
  }, [startDate, endDate])

  return (
    <div className={cnCareerCard('Working', {})}>
      <Typography className={cnCareerCard('Duration', {})} color='purple'>
        {!!duration.years && <Text id='careerCard.durationYears' years={duration.years} />}
        {!!duration.months && <Text id='careerCard.durationMonths' months={duration.months} />}
      </Typography>
      <Typography className={cnCareerCard('Date', {})} color='purple'>
        {format(parseISO(career.startDate), dateFormat)}
        &nbsp;-&nbsp;
        {career.endDate ? format(parseISO(career.endDate), dateFormat) : <Text id='careerCard.today' />}
      </Typography>
    </div>
  )
}
