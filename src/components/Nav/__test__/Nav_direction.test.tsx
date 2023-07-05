/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { NavWrapper } from './NavWrapper'
import { Nav as NavBase } from '../Nav'
import { withNavDirectionHorizontal } from '../_direction/Nav_direction_horizontal'

const Nav = compose(withNavDirectionHorizontal)(NavBase)

describe('Nav', () => {
  test('must return the component template', () => {
    render(
      <NavWrapper>
        <Nav links={[]} data-testid='nav' direction='horizontal' />
      </NavWrapper>
    )

    expect(screen.getByTestId('nav')).toHaveClass('Nav_direction_horizontal')
  })
})
