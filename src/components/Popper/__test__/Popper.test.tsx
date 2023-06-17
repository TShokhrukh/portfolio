/* global test, jest, expect, describe, beforeEach */
import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { PopperModel } from '../Popper.model'
import { PopperViewMode } from '../Popper.viewModel'
import { Popper } from '../Popper'

import type { IPopperModel, IPopperViewModel } from '../__types__'

describe('Popper', () => {
  let model: IPopperModel
  let viewModel: IPopperViewModel

  beforeEach(() => {
    model = new PopperModel()
    viewModel = new PopperViewMode(model)
  })

  test('render content if viewModel.isOpen property is "true"', () => {
    render(<Popper viewModel={viewModel}>popper_children</Popper>)

    act(() => {
      viewModel.open()
    })
    expect(screen.queryByText('popper_children')).toBeInTheDocument()
  })

  test('does not render content if viewModel.isOpen property is "false"', () => {
    render(<Popper viewModel={viewModel}>popper_children</Popper>)

    expect(screen.queryByText('popper_children')).not.toBeInTheDocument()
  })

  test('render target prop', () => {
    render(<Popper viewModel={viewModel} target={() => <button data-testid='button'>popper_target</button>} />)

    expect(screen.getByTestId('button')).toHaveTextContent('popper_target')
  })

  test('should render content when target is clicked', () => {
    render((
      <Popper viewModel={viewModel} target={(props) => <button {...props} data-testid='button'>popper_target</button>}>
        popper_children
      </Popper>
    ))

    expect(screen.queryByText('popper_children')).not.toBeInTheDocument()
    act(() => fireEvent.click(screen.getByTestId('button')))
    expect(screen.queryByText('popper_children')).toBeInTheDocument()
  })
})
