import React, { useContext, FC } from 'react'
import { useTranslator } from '@eo-locale/react'
import { cnExperienceCard } from '../ExperienceCard.const'
import { Context } from '../lib/context'
import type { IExperienceCardContext } from '../__types__'

import './ExperienceCard-Skill.scss'

export const ExperienceCardSkill: FC = () => {
  const t = useTranslator()
  const { locales } = useContext<IExperienceCardContext>(Context)

  return (
    <h3 className={cnExperienceCard('Skill', [])}>{locales[t.language]?.skill}</h3>
  )
}
