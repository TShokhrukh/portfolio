/* global test, jest, expect, describe */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { AboutMe } from '../AboutMe'

describe('AboutMe', () => {
  test('must return the component template', () => {
    render(<AboutMe data-testid='about_me' />)

    expect(screen.getByTestId('about_me')).toMatchSnapshot()
  })
})
