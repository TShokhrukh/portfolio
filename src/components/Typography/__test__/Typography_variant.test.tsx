/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { compose, composeU } from '@bem-react/core'
import { Typography as TypographyBase } from '../Typography'
import { withTypographyVariantBody } from '../_variant/Typography_variant_body'
import { withTypographyVariantSpan } from '../_variant/Typography_variant_span'
import { withTypographyVariantH1 } from '../_variant/Typography_variant_h1'
import { withTypographyVariantH2 } from '../_variant/Typography_variant_h2'
import { withTypographyVariantH3 } from '../_variant/Typography_variant_h3'
import { withTypographyVariantH4 } from '../_variant/Typography_variant_h4'
import { withTypographyVariantH5 } from '../_variant/Typography_variant_h5'
import { withTypographyVariantH6 } from '../_variant/Typography_variant_h6'

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
