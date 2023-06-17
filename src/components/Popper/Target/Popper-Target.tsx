import React, { useContext } from 'react'
import { Context } from '../lib/context'
import type { TPopperContext } from '../__types__'

export const PopperTarget: React.FC = () => {
  const { target: Target, viewModel } = useContext<TPopperContext>(Context)

  if (!Target) {
    return null
  }

  return <Target onClick={viewModel.toggle} />
}
