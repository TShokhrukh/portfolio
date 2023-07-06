/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Preview as PreviewBase } from '../Preview'
import { Preview as PreviewMobile } from '../Preview@mobile'
import { Preview as PreviewDesktop } from '../Preview@desktop'
import { PreviewWrapper } from './PreviewWrapper'

const platforms = [
  ['base', PreviewBase],
  ['mobile', PreviewMobile],
  ['desktop', PreviewDesktop]
]

describe.each(platforms)('Preview@%s', (_, Preview) => {
  test('must return the component template', () => {
    render(
      <PreviewWrapper>
        <Preview className='test_class' data-testid='preview' />
      </PreviewWrapper>
    )

    expect(screen.getByTestId('preview')).toMatchSnapshot()
  })

  test('must change the component tag via prop component', () => {
    render(
      <PreviewWrapper>
        <Preview component='section' data-testid='preview' />
      </PreviewWrapper>
    )

    expect(screen.getByTestId('preview').tagName).toBe('SECTION')
  })
})
