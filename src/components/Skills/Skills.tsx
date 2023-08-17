import React, { FC } from 'react'
import { Text } from '@eo-locale/react'
import { Typography } from '~/components/Typography/build'
import { Badge } from '~/components/Badge/build'
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
      <div {...props} className={cnSkills({}, [className])}>
        <div>
          <Badge color='purple'>
            <Text id='skills.badge' />
          </Badge>
        </div>
        <Typography variant='h2' color='white' className={cnSkills('Title')}>
          <Text id='skills.title' />
        </Typography>
        <SkillsContent />
      </div>
    </Context.Provider>
  )
}
