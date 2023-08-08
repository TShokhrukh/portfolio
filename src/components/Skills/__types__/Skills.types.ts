import type { IClassNameProps } from '@bem-react/core'

export interface ISkill {
  id: string,
  title?: string,
  img: string
}

export interface ISkillsProps extends IClassNameProps {
  skills: ISkill[]
}

export interface ISkillsContext {
  skills: ISkill[]
}
