import type { ReactNode, ComponentType } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import { IDrawerViewModel } from './Drawer.viewModel.types'

interface ITargetProps extends IClassNameProps {
  onClick(): void
}

export interface IDrawerProps {
  viewModel: IDrawerViewModel,
  title?: ReactNode,
  children?: ReactNode,
  target: ComponentType<ITargetProps>
}

export interface IDrawerContext {
  viewModel: IDrawerViewModel,
  title?: ReactNode,
  children?: ReactNode,
  target: ComponentType<ITargetProps>
}
