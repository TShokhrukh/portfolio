/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from '../Icon'

describe('Icon', () => {
  test('component template', () => {
    render(<Icon data-testid='icon' name='user' />)

    expect(screen.getByTestId('icon')).toMatchSnapshot()
  })
})
