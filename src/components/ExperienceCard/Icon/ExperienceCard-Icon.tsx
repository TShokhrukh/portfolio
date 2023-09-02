import React, { useContext } from 'react'
import { Icon } from '~/components/Icon'
import { Context } from '../lib/context'
import { cnExperienceCard } from '../ExperienceCard.const'

import type { IExperienceCardContext } from '../__types__'
import './ExperienceCard-Icon.scss'

export const ExperienceCardIcon: React.FC = () => {
  const { icon } = useContext<IExperienceCardContext>(Context)
  if (!icon) {
    return null
  }
  return <Icon name={icon} className={cnExperienceCard('Icon', {})} />
}
