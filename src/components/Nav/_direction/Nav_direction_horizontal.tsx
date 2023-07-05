import React from 'react'
import { withBemMod } from '@bem-react/core'
import { cnNav } from '../Nav.const'
import type { INavDirectionProps, INavProps } from '../__types__'

import './Nav_direction_horizontal.css'

export const withNavDirectionHorizontal = withBemMod<INavDirectionProps, INavProps>(
  cnNav(),
  { direction: 'horizontal' },
  function (Nav) {
    return function withNavDirectionHorizontalWrapper ({
      className,
      ...props
    }) {
      return <Nav {...props} direction={undefined} className={cnNav({}, [className])} />
    }
  }
)
