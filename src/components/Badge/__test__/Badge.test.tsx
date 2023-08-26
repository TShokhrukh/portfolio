/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  test('must return the component template', () => {
    render(<Badge role='badge' id='temp_id' className='temp_class'>children</Badge>)

    expect(screen.getByRole('badge')).toMatchSnapshot()
  })
})
