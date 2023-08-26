import type { ICardProps } from '~/components/Card/__types__'
import type { TLocale } from '~/types'

export interface ICareer {
  id: string,
  active: boolean,
  title: string,
  desc: TLocale<string>,
  startDate: string,
  endDate?: string
}

export interface ICareerCardProps extends ICardProps {
  career: ICareer
}

export interface ICareerCardContext {
  career: ICareer
}
