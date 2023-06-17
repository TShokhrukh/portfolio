import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import { createPortal } from 'react-dom'
import { Popper } from 'react-popper'

import { Context } from '../lib/context'
import { container, cnPopper } from '../Popper.const'
import type { TPopperContext } from '../__types__'

import './Popper-Portal.scss'

export const PopperPortal: React.FC = observer(
  function PopperPortalView () {
    const { children, anchorEl, options } = useContext<TPopperContext>(Context)

    return (
      <Popper referenceElement={anchorEl?.current!}
        placement={options?.placement}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}>
        {({ ref, style }) => (
          createPortal((
            <div ref={ref} role='tooltip' className={cnPopper('Portal')} style={style}>
              {children}
            </div>
          ), container)
        )}
      </Popper>
    )
  }
)
