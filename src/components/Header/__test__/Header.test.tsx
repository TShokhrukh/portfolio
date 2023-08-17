/* global test, expect, describe, beforeEach */
import React from 'react'
import type { Locale } from '@eo-locale/core'
import { render, screen } from '@testing-library/react'
import { LanguagePickModel } from '~/components/LanguagePick/LanguagePick.model'
import { PopperModel } from '~/components/Popper/Popper.model'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { Header } from '../Header'
import { HeaderViewModel } from '../Header.viewModel'
import type { ILink } from '~/components/Nav/__types__'
import type { IHeaderViewModel } from '../__types__'

const locales: Locale[] = [
  {
    language: 'en',
    messages: {
      language: {
        en: 'en',
        ru: 'ru',
        uz: 'uz'
      }
    }
  }
]

describe('Header', () => {
  let viewModel: IHeaderViewModel

  beforeEach(() => {
    viewModel = new HeaderViewModel(
      new LanguagePickModel('en', ['en', 'ru', 'uz']),
      new PopperModel()
    )
  })

  test('must return the component template', () => {
    render(
      <LanguageWrapper locales={locales}>
        <Header viewModel={viewModel} links={[]} data-testid='header' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('must render links', () => {
    const links: ILink[] = [
      {
        href: 'one',
        label: 'link-1'
      },
      {
        href: 'two',
        label: 'link-2'
      }
    ]
    render(
      <LanguageWrapper locales={locales}>
        <Header viewModel={viewModel} links={links} data-testid='header' />
      </LanguageWrapper>
    )

    expect(screen.queryByText('link-1')).toBeInTheDocument()
    expect(screen.queryByText('link-1')).toHaveAttribute('href', 'one')
    expect(screen.queryByText('link-2')).toBeInTheDocument()
    expect(screen.queryByText('link-2')).toHaveAttribute('href', 'two')
  })
})
