import type { TLocale } from './base.types'

export interface IProject {
  id: string,
  name: string,
  href: string,
  desc: TLocale<string>,
  stack: string[],
  image: string
}

export interface ISkill {
  id: string,
  img: string,
  title?: string
}

export interface IExperience {
  id: string,
  icon: string,
  locales: TLocale<{
    body?: string,
    skill?: string
  }>
}

export interface ICareer {
  id: string,
  active: boolean,
  title: string,
  desc: TLocale<string>,
  startDate: string,
  endDate?: string
}

export type TProjectsList = IProject[]
export type TSkillsList = ISkill[]
export type TExperienceList = IExperience[]
export type TCareersList = ICareer[]
