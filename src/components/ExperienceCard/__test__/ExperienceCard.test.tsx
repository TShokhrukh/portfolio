/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ExperienceCard } from '../ExperienceCard'
import { ExperienceCardWrapper } from './ExperienceCardWrapper'

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
      <ExperienceCardWrapper>
        <ExperienceCard experience={experience} data-testid='experience_card' />
      </ExperienceCardWrapper>
    )

    expect(screen.getByTestId('experience_card')).toMatchSnapshot()
  })
})
