/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { Career } from '../Career'
import type { TCareerList } from '../__types__'

describe('Career', () => {
  test('must return the component template', () => {
    const careers: TCareerList = [
      {
        id: '1',
        active: true,
        title: 'Title 1',
        desc: {
          en: 'desc 1'
        },
        startDate: '2011-05-09',
        endDate: '2012-06-04'
      },
      {
        id: '2',
        active: false,
        title: 'Title 2',
        desc: {
          en: 'desc 2'
        },
        startDate: '2020-04-09',
        endDate: '2023-06-04'
      }
    ]
    render(
      <LanguageWrapper>
        <Career careers={careers} data-testid='career' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('career')).toMatchSnapshot()
  })
})
