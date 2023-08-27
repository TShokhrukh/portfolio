import { IClassNameProps } from '@bem-react/core'
import type { TCareersList } from '~/components/CareerList/__types__'

export interface ICareerProps extends IClassNameProps {
  careers: TCareersList
}

export {
  TCareersList
}
