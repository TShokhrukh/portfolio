/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Button as ButtonBase } from '../Button'
import { withButtonDisabled } from '../_disabled/Button_disabled'

const Button = compose(withButtonDisabled)(ButtonBase)

describe('Button_disabled', () => {
  test('must return the component template', () => {
    render(<Button data-testid='button' disabled>children</Button>)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })
})
