/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Button as ButtonBase } from '../Button'
import { withButtonRounded } from '../_rounded/Button_rounded'

const Button = compose(withButtonRounded)(ButtonBase)

describe('Button_rounded', () => {
  test('must return the component template', () => {
    render(<Button data-testid='button' rounded>children</Button>)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })
})
