/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Badge as BadgeBase } from '../Badge'
import { withBadgeColorPurple } from '../_color/Badge_color_purple'

const Badge = compose(withBadgeColorPurple)(BadgeBase)

describe('Badge_color', () => {
  test('component template', () => {
    render(<Badge role='badge' />)

    expect(screen.getByRole('badge')).toMatchSnapshot()
  })

  test('component color purple', () => {
    render(<Badge data-testid='badge' color='purple' />)

    expect(screen.getByTestId('badge')).toHaveAttribute('class', 'Badge Badge_color_purple')
  })
})
