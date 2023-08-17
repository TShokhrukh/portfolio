import React, { FC, useContext } from 'react'
import { Text } from '@eo-locale/react'
import { Typography } from '~/components/Typography/build'
import { cnList, Context } from '../List.const'
import type { IListContext } from '../__types__'
import './List-NoItems.scss'

export const ListNoItems: FC = () => {
  const { noItemsText } = useContext<IListContext>(Context)

  return (
    <Typography className={cnList('NoItems')}>
      <Text id={noItemsText} />
    </Typography>
  )
}
