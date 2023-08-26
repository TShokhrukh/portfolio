/* global test, expect, describe */
import React from 'react'
import intervalToDuration from 'date-fns/intervalToDuration'
import parseISO from 'date-fns/parseISO'
import { render, screen } from '@testing-library/react'
import { CareerCard } from '../CareerCard'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import type { ICareer } from '../__types__'

const locales = [
  {
    language: 'en',
    messages: {
      careerCard: {
        durationYears: '{years} Y',
        durationMonths: '{months} M'
      }
    }
  }
]

describe('CareerCard', () => {
  test('must return the component template', () => {
    const career: ICareer = {
      id: '1',
      active: false,
      title: 'Title',
      desc: {
        en: 'desc'
      },
      startDate: '2020-04-09',
      endDate: '2023-06-04'
    }
    render(
      <LanguageWrapper locales={locales}>
        <CareerCard career={career} data-testid='career_card' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('career_card')).toMatchSnapshot()
  })

  test('must have \'CareerCard_active\' if active=true for the career.', () => {
    const career: ICareer = {
      id: '1',
      active: true,
      title: 'Title',
      desc: {
        en: 'desc'
      },
      startDate: '2020-04-09',
      endDate: '2023-06-04'
    }
    render(
      <LanguageWrapper locales={locales}>
        <CareerCard career={career} data-testid='career_card' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('career_card')).toHaveAttribute('class', 'Card CareerCard CareerCard_active')
  })

  test('must throw error when the end date is greater than the start date', () => {
    const career: ICareer = {
      id: '1',
      active: true,
      title: 'Title',
      desc: {
        en: 'desc'
      },
      startDate: '2020-04-09',
      endDate: '2002-06-04'
    }

    expect(() => {
      render(
        <LanguageWrapper locales={locales}>
          <CareerCard career={career} data-testid='career_card' />
        </LanguageWrapper>
      )
    }).toThrowError('endDate cannot be earlier than startDate')
  })

  test('by default, it must take today\'s date for \'endDate\' if it is not provided', () => {
    const startDate = '2020-04-09'
    const career: ICareer = {
      id: '1',
      active: false,
      title: 'Title',
      desc: {
        en: 'desc'
      },
      startDate,
      endDate: ''
    }
    const duration = intervalToDuration({
      start: parseISO(startDate),
      end: new Date()
    })
    const content = `${duration.years} Y` + (duration.months ? `${duration.months} M` : '')

    render(
      <LanguageWrapper locales={locales}>
        <CareerCard career={career} data-testid='career_card' />
      </LanguageWrapper>
    )

    expect(screen.getByText(content)).toBeInTheDocument()
  })
})
