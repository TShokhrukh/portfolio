import React, { FC } from 'react'
import { ExperienceCard } from '~/components/ExperienceCard/build'
import { List } from '~/components/List/build'
import { cnExperienceList } from './ExperienceList.const'
import type { IExperienceListProps } from './__types__'
import './ExperienceList.scss'

export const ExperienceList: FC<IExperienceListProps> = ({
  component: Component = 'div',
  className,
  experience,
  ...props
}) => {
  return <List {...props} component={Component} className={cnExperienceList({}, [className])}
    items={experience} noItemsText='experienceList.noItems'
    itemComponent={(e) => <ExperienceCard experience={e} className={cnExperienceList('Item', [])} />} />
}
