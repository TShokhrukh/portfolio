import React, { FC } from 'react'
import { Text } from '@eo-locale/react'
import { BadgeSection } from '~/components/BadgeSection/build'
import { SkillsContent } from './Content'
import { cnSkills, Context } from './Skills.const'
import type { ISkillsProps } from './__types__'
import './Skills.scss'

export const Skills: FC<ISkillsProps> = ({
  skills,
  className,
  ...props
}) => {
  return (
    <Context.Provider value={{ skills }}>
      <BadgeSection {...props} badge={<Text id='skills.badge' />} title={<Text id='skills.title' />}
        className={cnSkills({}, [className])}>
        <SkillsContent />
      </BadgeSection>
    </Context.Provider>
  )
}
