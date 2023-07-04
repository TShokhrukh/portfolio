import React from 'react'
import { observer } from 'mobx-react'
import { Context } from './lib/context'

import PopperTarget from './Target'
import PopperPortal from './Portal'

import type { IPopperProps } from './__types__'

export const Popper: React.FC<IPopperProps> = observer(
  function PopperView (props) {
    return (
      <Context.Provider value={props}>
        <PopperTarget />
        <PopperPortal />
      </Context.Provider>
    )
  }
)
