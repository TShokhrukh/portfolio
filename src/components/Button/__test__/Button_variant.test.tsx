/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Button as ButtonBase } from '../Button'
import { withButtonVariantLink } from '../_variant/Button_variant_link'

const Button = compose(withButtonVariantLink)(ButtonBase)

describe('Button_variant', () => {
  test('component variant link', () => {
    render(<Button data-testid='button' variant='link' href='/home'>children</Button>)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })
})
