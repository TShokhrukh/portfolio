/* global test, jest, expect, describe */
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Typography } from '../Typography'

describe('Typography', () => {
  test('must return the component template', () => {
    render(<Typography data-testid='typography' className='temp_class'>children</Typography>)

    expect(screen.getByTestId('typography')).toMatchSnapshot()
  })

  test('must change the component by "component" prop', () => {
    render(<Typography data-testid='typography' component='div' />)

    expect(screen.getByTestId('typography').tagName).toBe('DIV')
  })
})
