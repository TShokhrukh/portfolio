/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  test('component template', () => {
    render(<Badge role='badge' id='temp_id' className='temp_class' />)

    expect(screen.getByRole('badge').tagName).toMatchSnapshot()
  })

  test('render the children', () => {
    render(<Badge data-testid='badge'>children</Badge>)

    expect(screen.getByTestId('badge')).toHaveTextContent('children')
  })

  test('must render SPAN tag', () => {
    render(<Badge data-testid='badge' />)

    expect(screen.getByTestId('badge').tagName).toBe('SPAN')
  })
})
