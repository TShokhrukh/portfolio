/* global test, jest, expect, describe */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  test('component template', () => {
    render(<Button data-testid='button' id='button_id' className='temp_class' />)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })

  test('must render BUTTON tag', () => {
    render(<Button data-testid='button' />)

    expect(screen.getByTestId('button')).toHaveAttribute('type', 'button')
  })

  test('component tag name depends from prop \'component\'', () => {
    render(<Button component='div' data-testid='temp' />)

    expect(screen.getByTestId('temp').tagName).toBe('DIV')
  })

  test('component render children', () => {
    render(<Button>children</Button>)

    expect(screen.getByRole('button')).toHaveTextContent('children')
  })

  test('handle click', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick} />)

    expect(onClick.mock.calls.length).toEqual(0)
    fireEvent.click(screen.getByRole('button'))
    expect(onClick.mock.calls.length).toEqual(1)
  })
})
