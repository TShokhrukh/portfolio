/* global test, expect, describe, beforeEach */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { HeaderWrapper } from './HeaderWrapper'
import { Header } from '../Header'
import { HeaderViewModel } from '../Header.viewModel'
import { LanguagePickModel } from '../../LanguagePick/LanguagePick.model'
import { PopperModel } from '../../Popper/Popper.model'

import type { IHeaderViewModel } from '../__types__'
import type { ILink } from '../../Nav/__types__'

describe('Header', () => {
  let viewModel: IHeaderViewModel

  beforeEach(() => {
    viewModel = new HeaderViewModel(
      new LanguagePickModel('en', ['en', 'ru', 'uz']),
      new PopperModel()
    )
  })

  test('should return the component template', () => {
    render(
      <HeaderWrapper>
        <Header viewModel={viewModel} links={[]} data-testid='header' />
      </HeaderWrapper>
    )

    expect(screen.getByTestId('header')).toMatchSnapshot()
  })

  test('should render links', () => {
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
      <HeaderWrapper>
        <Header viewModel={viewModel} links={links} data-testid='header' />
      </HeaderWrapper>
    )

    expect(screen.queryByText('link-1')).toBeInTheDocument()
    expect(screen.queryByText('link-1')).toHaveAttribute('href', 'one')
    expect(screen.queryByText('link-2')).toBeInTheDocument()
    expect(screen.queryByText('link-2')).toHaveAttribute('href', 'two')
  })
})
