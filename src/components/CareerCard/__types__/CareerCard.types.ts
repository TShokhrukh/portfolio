import type { ICardProps } from '~/components/Card/__types__'
import type { ICareer } from '~/types'

export interface ICareerCardProps extends ICardProps {
  career: ICareer
}

export interface ICareerCardContext {
  career: ICareer
}

export {
  ICareer
}
