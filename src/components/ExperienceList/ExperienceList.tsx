import React, { FC } from 'react'
import { ExperienceCard } from '~/components/ExperienceCard/ExperienceCard'
import { cnExperienceList } from './ExperienceList.const'

import type { IExperienceListProps } from './__types__'

import './ExperienceList.scss'

export const ExperienceList: FC<IExperienceListProps> = ({
  component: Component = 'div',
  className,
  experience,
  ...props
}) => {
  return (
    <Component {...props} className={cnExperienceList({}, [className])}>
      {experience.map(({ id, ...e }) =>
        <ExperienceCard key={id} experience={e} className={cnExperienceList('Item', [])} />
      )}
    </Component>
  )
}
