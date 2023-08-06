/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { Skills } from '../Skills'
import type { ISkill } from '../__types__'

describe('Skills', () => {
  test('must return the component template', () => {
    const skills: ISkill[] = [
      {
        id: '1',
        img: 'http://localhost:9000/img/1.png'
      },
      {
        id: '2',
        img: 'http://localhost:9000/img/2.png'
      }
    ]

    render(
      <LanguageWrapper>
        <Skills skills={skills} className='test_class' data-testid='skills' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('skills')).toMatchSnapshot()
  })
})
