/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { ExperienceCard } from '../ExperienceCard'

describe('ExperienceCard', () => {
  test('must return the component template', () => {
    const experience = {
      icon: 'home',
      locales: {
        en: {
          body: 'home_body',
          skill: 'home_skill'
        }
      }
    }

    render(
      <LanguageWrapper>
        <ExperienceCard experience={experience} data-testid='experience_card' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('experience_card')).toMatchSnapshot()
  })
})
