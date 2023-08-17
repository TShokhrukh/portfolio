/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { compose, composeU } from '@bem-react/core'
import { Typography as TypographyBase } from '../Typography'
import {
  withTypographyVariantBody,
  withTypographyVariantSpan,
  withTypographyVariantH1,
  withTypographyVariantH2,
  withTypographyVariantH3,
  withTypographyVariantH4,
  withTypographyVariantH5,
  withTypographyVariantH6
} from '../_variant'

export const Typography = compose(
  composeU(
    withTypographyVariantBody,
    withTypographyVariantSpan,
    withTypographyVariantH1,
    withTypographyVariantH2,
    withTypographyVariantH3,
    withTypographyVariantH4,
    withTypographyVariantH5,
    withTypographyVariantH6
  )
)(TypographyBase)

const variants = [
  'body',
  'span',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6'
] as const

describe.each(variants)('Typography variant %s', (variant) => {
  test(`must return the component template for variant ${variant}`, () => {
    render(<Typography variant={variant} data-testid='typography'>children</Typography>)

    expect(screen.getByTestId('typography')).toMatchSnapshot()
  })
})
