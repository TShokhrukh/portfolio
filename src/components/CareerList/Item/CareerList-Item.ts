import { withBemMod } from '@bem-react/core'
import { CareerCard } from '~/components/CareerCard/build'
import { cnCareerList } from '../CareerList.const'

export const CareerListItem = withBemMod(cnCareerList('Item'), {})(CareerCard)
