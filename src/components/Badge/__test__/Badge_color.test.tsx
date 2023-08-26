/* global test, expect, describe */
import React from 'react'
import { compose } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Badge as BadgeBase } from '../Badge'
import { withBadgeColorPurple } from '../_color/Badge_color_purple'

const Badge = compose(withBadgeColorPurple)(BadgeBase)

describe('Badge_color', () => {
  test('must add the \'Badge_color_purple\' class when color=\'purple\'', () => {
    render(<Badge data-testid='badge' color='purple' />)

    expect(screen.getByTestId('badge')).toHaveAttribute('class', 'Badge Badge_color_purple')
  })
})
