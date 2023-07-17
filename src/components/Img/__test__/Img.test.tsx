/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Img } from '../Img'

describe('Img', () => {
  test('the component tagName must be IMG', () => {
    render(<Img data-testid='image' />)

    expect(screen.getByTestId('image').tagName).toBe('IMG')
  })

  test('plugSrc prop must change src', () => {
    render(<Img data-testid='image' src='src.jpeg' plugSrc='plug-src.jpeg' />)

    expect(screen.getByTestId('image')).toHaveAttribute('src', 'plug-src.jpeg')
  })

  test('showPlug prop must disable plugSrc', () => {
    render(<Img data-testid='image' src='src.jpeg' plugSrc='plug-src.jpeg' showPlug={false} />)

    expect(screen.getByTestId('image')).toHaveAttribute('src', 'src.jpeg')
  })
})
