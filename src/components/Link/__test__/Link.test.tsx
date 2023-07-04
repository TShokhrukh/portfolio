/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Link } from '../Link'

describe('Link', () => {
  test('component template', () => {
    render(<Link role='link' id='temp_id' className='temp_class' />)

    expect(screen.getByRole('link').tagName).toBe('A')
    expect(screen.getByRole('link')).toHaveAttribute('class', 'Link temp_class')
    expect(screen.getByRole('link')).toHaveAttribute('id', 'temp_id')
  })

  test('should set the href attribute', () => {
    render(<Link role='link' href='/link' />)

    expect(screen.getByRole('link')).toHaveAttribute('href', '/link')
  })

  test('should render the children', () => {
    render(<Link role='link'>lunk text</Link>)

    expect(screen.getByRole('link')).toHaveTextContent('lunk text')
  })
})
