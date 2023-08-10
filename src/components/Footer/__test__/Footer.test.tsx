/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '../Footer'

describe('Footer', () => {
  test('component template', () => {
    render(<Footer className='test_class' data-testid='footer_id' />)

    expect(screen.getByTestId('footer_id')).toMatchSnapshot()
  })
})
