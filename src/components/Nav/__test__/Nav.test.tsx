/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { NavWrapper } from './NavWrapper'
import { Nav } from '../Nav'

import type { ILink } from '../__types__'

describe('Nav', () => {
  test('must return the component template', () => {
    const links: ILink[] = [
      {
        href: 'one',
        label: 'link-1'
      },
      {
        href: 'two',
        label: 'link-2'
      }
    ]
    render(
      <NavWrapper>
        <Nav links={links} active='two' data-testid='nav' />
      </NavWrapper>
    )

    expect(screen.getByTestId('nav')).toMatchSnapshot()
  })
})
