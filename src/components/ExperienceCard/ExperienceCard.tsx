import React, { FC } from 'react'
import { ExperienceCardIcon } from './Icon'
import { ExperienceCardBody } from './Body'
import { ExperienceCardSkill } from './Skill'
import { cnExperienceCard } from './ExperienceCard.const'
import { Context } from './lib/context'

import type { IExperienceCardProps } from './__types__'

import './ExperienceCard.scss'

export const ExperienceCard: FC<IExperienceCardProps> = ({
  component: Component = 'div',
  className,
  experience,
  ...props
}) => {
  return (
    <Context.Provider value={experience}>
      <Component {...props} className={cnExperienceCard({}, [className])}>
        <ExperienceCardIcon />
        <ExperienceCardBody />
        <ExperienceCardSkill />
      </Component>
    </Context.Provider>
  )
}
