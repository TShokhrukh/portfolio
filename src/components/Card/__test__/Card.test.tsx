/* global test, jest, expect, describe */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  test('must return the component template', () => {
    render(<Card data-testid='card'>children</Card>)

    expect(screen.getByTestId('card')).toMatchSnapshot()
  })

  test('must change tag name by component prop', () => {
    render(<Card component='article' data-testid='card' />)

    expect(screen.getByTestId('card').tagName).toBe('ARTICLE')
  })
})
