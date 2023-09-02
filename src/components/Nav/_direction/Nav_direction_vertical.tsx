import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnNav } from '../Nav.const'
import type { INavDirectionVerticalProps, INavProps } from '../__types__'

import './Nav_direction_vertical.scss'

export const withNavDirectionVertical = withBemMod<INavDirectionVerticalProps, INavProps>(
  cnNav(),
  { direction: 'vertical' },
  function (Nav) {
    return function withNavDirectionVerticalWrapper ({
      className,
      ...props
    }) {
      return <Nav {...props} direction={undefined} className={cnNav({}, [className])} />
    }
  }
)
