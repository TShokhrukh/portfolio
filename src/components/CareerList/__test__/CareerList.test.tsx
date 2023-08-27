/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { CareerList } from '../CareerList'
import type { TCareersList } from '../__types__'

describe('CareerList', () => {
  test('must return the component template', () => {
    const careers: TCareersList = [
      {
        id: '1',
        active: true,
        title: 'Title 1',
        desc: {
          en: 'desc 1'
        },
        startDate: '2010-05-09',
        endDate: '2015-06-04'
      },
      {
        id: '2',
        active: false,
        title: 'Title 2',
        desc: {
          en: 'desc 2'
        },
        startDate: '2016-04-09',
        endDate: '2023-06-04'
      }
    ]
    render(
      <LanguageWrapper>
        <CareerList careers={careers} data-testid='career_list' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('career_list')).toMatchSnapshot()
  })
})
