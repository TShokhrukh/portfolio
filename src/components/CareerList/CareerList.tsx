import React, { FC } from 'react'
import { List } from '~/components/List/build'
import { CareerListItem } from './Item'
import { cnCareerList } from './CareerList.const'
import type { ICareerListProps } from './__types__'

export const CareerList: FC<ICareerListProps> = ({
  careers,
  className,
  ...props
}) => {
  return (
    <List {...props} items={careers} itemPropKey='career'
      itemComponent={CareerListItem}
      className={cnCareerList({}, [className])} />
  )
}
