/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BadgeSection } from '../BadgeSection'

describe('BadgeSection', () => {
  test('must return the component template', () => {
    render(<BadgeSection data-testid='badge_section' badge={<span>badge</span>} title={'Title'}>content</BadgeSection>)

    expect(screen.getByTestId('badge_section')).toMatchSnapshot()
  })

  test('must change tag name by component prop', () => {
    render(<BadgeSection component='section' data-testid='badge_section' />)

    expect(screen.getByTestId('badge_section').tagName).toBe('SECTION')
  })
})
