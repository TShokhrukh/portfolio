import React, { FC } from 'react'
import { Context, cnList } from './List.const'
import { ListNoItems } from './NoItems'
import './List.scss'
import type { IListProps } from './__types__'

export const List: FC<IListProps> = ({
  items,
  className,
  component: Component = 'div',
  itemComponent: ItemComponent = 'div',
  itemPropKey,
  noItemsText = 'list.noItems',
  ...props
}) => {
  return (
    <Context.Provider value={{ noItemsText }}>
      <Component {...props} className={cnList({ empty: !items.length }, [className])}>
        {items.length
          ? items.map(i => <ItemComponent key={i.id} {...(itemPropKey ? { [itemPropKey]: i } : i)} />)
          : <ListNoItems />}
      </Component>
    </Context.Provider>
  )
}
