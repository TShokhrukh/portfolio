import { IClassNameProps } from '@bem-react/core'
import type { ICareer } from '~/components/CareerCard/__types__'

export type TCareerList = ICareer[]

export interface ICareerListProps extends IClassNameProps {
  careers: TCareerList
}

export { ICareer }
