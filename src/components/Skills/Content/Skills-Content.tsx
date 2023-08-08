import React, { useContext, FC } from 'react'
import { List } from '~/components/List/List'
import { SkillsItem } from '../Item'
import { Context, cnSkills } from '../Skills.const'
import type { ISkillsContext } from '../__types__'
import './Skills-Content.scss'

export const SkillsContent: FC = () => {
  const { skills } = useContext<ISkillsContext>(Context)

  return <List items={skills} itemComponent={(i) => <SkillsItem src={i.img} title={i.title} />} className={cnSkills('Content', [])} />
}
