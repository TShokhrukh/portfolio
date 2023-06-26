/* global test, jest, expect, describe */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  test('must return the component template', () => {
    render(<Button data-testid='button' id='button_id' className='temp_class' />)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })

  test('must render startIcon', () => {
    render(<Button startIcon={() => <i data-testid='button_icon' />} />)

    expect(screen.getByTestId('button_icon')).toBeInTheDocument()
  })
  test('must render endIcon', () => {
    render(<Button endIcon={() => <i data-testid='button_icon' />} />)

    expect(screen.getByTestId('button_icon')).toBeInTheDocument()
  })

  test('must render BUTTON tag', () => {
    render(<Button data-testid='button' />)

    expect(screen.getByTestId('button')).toHaveAttribute('type', 'button')
  })

  test('must render children', () => {
    render(<Button>children</Button>)

    expect(screen.getByRole('button')).toHaveTextContent('children')
  })

  test('must call the function when Button clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} />)

    expect(onClick.mock.calls.length).toEqual(0)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
