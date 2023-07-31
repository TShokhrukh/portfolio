/* global test, expect, describe, jest */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { List } from '../List'

describe('List', () => {
  const items = [
    {
      id: '1',
      label: 'item-1'
    },
    {
      id: '2',
      label: 'item-2'
    }
  ]

  test('must return the component template', () => {
    render(
      <LanguageWrapper>
        <List items={items} data-testid='list' itemComponent={({ id }) => <div>item-{id}</div>} />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('list')).toMatchSnapshot()
  })

  test('must display "no items message" if there are no items', () => {
    render(
      <LanguageWrapper>
        <List items={[]} />
      </LanguageWrapper>
    )

    expect(screen.getByText('list.noItems')).toBeInTheDocument()
  })

  test('prop "noItemsText" must change "no items message"', () => {
    render(
      <LanguageWrapper>
        <List items={[]} noItemsText='noItemsText' />
      </LanguageWrapper>
    )

    expect(screen.getByText('noItemsText')).toBeInTheDocument()
  })

  test('must pass the list item to the component', () => {
    const SpyComponent = jest.fn()

    render(
      <LanguageWrapper>
        <List items={items} itemComponent={SpyComponent} />
      </LanguageWrapper>
    )

    expect(SpyComponent).toHaveBeenCalledTimes(2)
    items.forEach((i, n) => {
      expect(SpyComponent).toHaveBeenNthCalledWith(n + 1, i, {})
    })
  })

  test('must pass the list item in the property set in the "itemPropKey"', () => {
    const SpyComponent = jest.fn()

    render(
      <LanguageWrapper>
        <List items={items} itemPropKey='item' itemComponent={SpyComponent} />
      </LanguageWrapper>
    )

    expect(SpyComponent).toHaveBeenCalledTimes(2)
    items.forEach((i, n) => {
      expect(SpyComponent).toHaveBeenNthCalledWith(n + 1, { item: i }, {})
    })
  })
})
