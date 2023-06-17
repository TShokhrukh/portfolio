/* global test, expect, describe, beforeEach */
import { PopperModel } from '../Popper.model'
import type { IPopperModel } from '../__types__'

describe('PopperModel', () => {
  let model: IPopperModel

  beforeEach(() => {
    model = new PopperModel()
  })

  test('should have isOpen property', () => {
    expect(model.isOpen).toBe(false)
  })

  test('should update isOpen property when setIsOpen is called', () => {
    expect(model.isOpen).toBe(false)
    model.setIsOpen(true)
    expect(model.isOpen).toBe(true)
  })
})
