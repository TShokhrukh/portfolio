/* global test, expect, describe, beforeEach */
import { PopperModel } from '../Popper.model'
import { PopperViewMode } from '../Popper.viewModel'
import type { IPopperModel, IPopperViewModel } from '../__types__'

describe('PopperViewMode', () => {
  let model: IPopperModel
  let viewMode: IPopperViewModel

  beforeEach(() => {
    model = new PopperModel()
    viewMode = new PopperViewMode(model)
  })

  test('must have isOpen property', () => {
    expect(viewMode.isOpen).toBe(false)
  })

  test('must set isOpen to "true" property when open is called', () => {
    viewMode.open()
    expect(viewMode.isOpen).toBe(true)
  })

  test('must set isOpen to "false" property when close is called', () => {
    model.setIsOpen(true)
    viewMode.close()
    expect(viewMode.isOpen).toBe(false)
  })

  test('must update isOpen property when toggle is called', () => {
    expect(viewMode.isOpen).toBe(false)
    viewMode.toggle()
    expect(viewMode.isOpen).toBe(true)
    viewMode.toggle()
    expect(viewMode.isOpen).toBe(false)
  })
})
