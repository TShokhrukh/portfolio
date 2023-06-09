/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Container } from '../Container'

describe('Container', () => {
  test('component template', () => {
    render(<Container data-testid='container' />)

    expect(screen.getByTestId('container')).toMatchSnapshot()
  })

  test('component render children', () => {
    render(<Container data-testid='container'>children</Container>)

    expect(screen.getByTestId('container')).toHaveTextContent('children')
  })
})
