/* global test, expect, describe */
import React from 'react'
import { compose, composeU } from '@bem-react/core'
import { render, screen } from '@testing-library/react'
import { Img as ImgBase } from '../Img'
import { withImgFillHorizontal, withImgFillVertical } from '../_fill'

const Img = compose(
  composeU(withImgFillHorizontal, withImgFillVertical)
)(ImgBase)

const fills = ['horizontal', 'vertical'] as const

describe.each(fills)('Img_fill_%s', (fill) => {
  test('must return the component template', () => {
    render(<Img data-testid='image' fill={fill} />)

    expect(screen.getByTestId('image')).toMatchSnapshot()
  })
})
