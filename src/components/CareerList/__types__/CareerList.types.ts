import { IClassNameProps } from '@bem-react/core'
import type { ICareer, TCareersList } from '~/types'

export interface ICareerListProps extends IClassNameProps {
  careers: TCareersList
}

export { ICareer, TCareersList }
