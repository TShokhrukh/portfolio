import React from 'react'
import { usePopperContext } from '../lib/context'

export const PopperTarget: React.FC = () => {
  const { target: Target, viewModel, id } = usePopperContext()

  if (!Target) {
    return null
  }

  return <Target onClick={viewModel.toggle} aria-describedby={id} />
}
