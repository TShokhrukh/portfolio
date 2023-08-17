/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { Preview } from '../Preview'

describe('Preview', () => {
  test('must return the component template', () => {
    render(
      <LanguageWrapper>
        <Preview className='test_class' data-testid='preview' telegram='https://telegram.org/' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('preview')).toMatchSnapshot()
  })
})
