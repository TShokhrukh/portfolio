/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { ExperienceList } from '../ExperienceList'

describe('ExperienceList', () => {
  test('must return the component template', () => {
    const experience = [
      {
        id: '1',
        icon: 'home',
        locales: {
          en: {
            body: 'home_body',
            skill: 'home_skill'
          }
        }
      },
      {
        id: '2',
        icon: 'user',
        locales: {
          en: {
            body: 'user_body',
            skill: 'user_skill'
          }
        }
      }
    ]
    render(
      <LanguageWrapper>
        <ExperienceList experience={experience} data-testid='experience_list' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('experience_list')).toMatchSnapshot()
  })
})
