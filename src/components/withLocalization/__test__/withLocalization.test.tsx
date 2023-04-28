/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { withLocalization } from '../withLocalization'
import { makeObservable, observable } from 'mobx'
import { Text } from '@eo-locale/react'

import type { ILocalizationService } from '../__types__'
import type { Locale, Translator } from '@eo-locale/core'
import { act } from 'react-dom/test-utils'

describe('withLocalization', () => {
  class LocalizationService implements ILocalizationService {
    @observable language: string
    locales: Locale[]
    translator?: Translator | undefined
    @observable isLoading: boolean

    constructor () {
      this.language = 'en'
      this.locales = [
        {
          language: 'en',
          messages: {
            hello: 'Hello'
          }
        },
        {
          language: 'ru',
          messages: {
            hello: 'Привет'
          }
        }
      ]
      this.isLoading = false
      makeObservable(this)
    }

    setLanguage (language: string): void {
      this.language = language
    }
  }

  test('correct display the child', () => {
    const Wrapper = withLocalization(new LocalizationService())(() => <p data-testid='temp'>children</p>)
    render(<Wrapper />)

    expect(screen.getByTestId('temp')).toHaveTextContent('children')
  })

  test('correct display the language changing', () => {
    const service = new LocalizationService()
    const Wrapper = withLocalization(service)(() => <p data-testid='temp'><Text id='hello' /></p>)
    render(<Wrapper />)

    expect(screen.getByTestId('temp')).toHaveTextContent('Hello')
    act(() => service.setLanguage('ru'))
    expect(screen.getByTestId('temp')).toHaveTextContent('Привет')
  })

  test('property translator is defined', () => {
    const service = new LocalizationService()
    const Wrapper = withLocalization(service)(() => null)
    render(<Wrapper />)

    expect(service.translator).toBeDefined()
  })

  test('correct display undefined message', () => {
    const Wrapper = withLocalization(new LocalizationService())(() => <p data-testid='temp'><Text id='goodby' /></p>)
    render(<Wrapper />)

    expect(screen.getByTestId('temp')).toHaveTextContent('goodby')
  })
})
