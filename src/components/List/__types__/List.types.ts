import type { ElementType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'

export interface IItem {
  id: string
}

export interface IListContext {
  noItemsText: string
}

export interface IListProps extends IClassNameProps, IComponentProp {
  items: IItem[],
  itemPropKey?: string|false,
  itemComponent?: ElementType,
  noItemsText?: string
}
