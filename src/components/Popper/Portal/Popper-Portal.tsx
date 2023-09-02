import React from 'react'
import { observer } from 'mobx-react'
import { createPortal } from 'react-dom'
import { Popper } from 'react-popper'
import ClickAwayListener from 'react-click-away-listener'
import { useFadeToggle } from '~/hooks/useFadeToggle'
import { usePopperContext } from '../lib/context'
import { container, cnPopper } from '../Popper.const'

import './Popper-Portal.scss'

export const PopperPortal: React.FC = observer(
  function PopperPortalView () {
    const { children, anchorEl, options, id, viewModel } = usePopperContext()
    const { target, show } = useFadeToggle<HTMLDivElement>(viewModel.isOpen)

    if (!show) {
      return null
    }

    return (
      <Popper referenceElement={anchorEl?.current!}
        placement={options?.placement}
        modifiers={[{ name: 'offset', options: { offset: [0, 8] } }]}>
        {({ ref, style }) => (
          createPortal((
            <ClickAwayListener onClickAway={viewModel.close}>
              <div id={id} ref={ref} role='tooltip'style={style}>
                <div ref={target} className={cnPopper('Portal')}
                  >{children}</div>
              </div>
            </ClickAwayListener>
          ), container)
        )}
      </Popper>
    )
  }
)
