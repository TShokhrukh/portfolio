/* global test, expect, describe, beforeEach */
import React from 'react'
import { act, render, screen } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'
import { LanguagePick } from '../LanguagePick'
import { LanguagePickModel } from '../LanguagePick.model'
import { LanguagePickViewModel } from '../LanguagePick.viewModel'
import { PopperModel } from '../../Popper/Popper.model'
import { LanguagePickWrapper } from './LanguagePickWrapper'

import type { ILanguagePickModel, ILanguagePickViewModel } from '../__types__'
import type { IPopperModel } from '../../Popper/__types__'

describe('LanguagePick', () => {
  let model: ILanguagePickModel
  let popperModel: IPopperModel
  let viewModel: ILanguagePickViewModel

  beforeEach(() => {
    model = new LanguagePickModel('en', ['en', 'ru', 'uz'])
    popperModel = new PopperModel()
    viewModel = new LanguagePickViewModel(model, popperModel)
  })

  test('should return the component template', () => {
    render(
      <LanguagePickWrapper>
        <LanguagePick viewModel={viewModel} id='test_id' className='test_class' data-testid='language_pick' />
      </LanguagePickWrapper>
    )

    expect(screen.getByTestId('language_pick')).toMatchSnapshot()
  })

  test('should render content if viewModel.isOpen property is "true"', async () => {
    render(
      <LanguagePickWrapper>
        <LanguagePick viewModel={viewModel} data-testid='language_pick' />
      </LanguagePickWrapper>
    )

    expect(screen.getByTestId('language_pick').textContent).toBe('en')
    expect(screen.queryByText('uz')).not.toBeInTheDocument()
    expect(screen.queryByText('ru')).not.toBeInTheDocument()

    await act(async () => {
      await viewModel.open()
    })

    expect(screen.queryAllByText('en').length).toBeLessThanOrEqual(1)
    expect(screen.queryByText('uz')).toBeInTheDocument()
    expect(screen.queryByText('ru')).toBeInTheDocument()
  })
})
