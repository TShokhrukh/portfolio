import React, { useContext, FC } from 'react'
import { useTranslator } from '@eo-locale/react'
import { cnExperienceCard } from '../ExperienceCard.const'
import { Context } from '../lib/context'
import type { IExperienceCardContext } from '../__types__'

import './ExperienceCard-Body.scss'

export const ExperienceCardBody: FC = () => {
  const t = useTranslator()
  const { locales } = useContext<IExperienceCardContext>(Context)

  return (
    <p className={cnExperienceCard('Body', [])}>{locales[t.language]?.body}</p>
  )
}
