import { IClassNameProps } from '@bem-react/core'
import type { TCareerList } from '~/components/CareerList/__types__'

export interface ICareerProps extends IClassNameProps {
  careers: TCareerList
}

export {
  TCareerList
}
