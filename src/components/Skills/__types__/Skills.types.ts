import type { IClassNameProps } from '@bem-react/core'
import type { ISkill, TSkillsList } from '~/types'

export interface ISkillsProps extends IClassNameProps {
  skills: TSkillsList
}

export interface ISkillsContext {
  skills: TSkillsList
}

export {
  ISkill
}
