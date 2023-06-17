import type { RefObject, ComponentType, ReactNode } from 'react'
import type { IClassNameProps } from '@bem-react/core'
import type * as PopperJS from '@popperjs/core'

interface ITargetProps {
  ['aria-describedby']?: string,
  onClick(): void
}

type TSetOpen = (isOpen: boolean) => void

export interface IPopperModel {
  isOpen: boolean,
  setIsOpen(open: boolean): void
}

export interface IPopperViewModel {
  isOpen: boolean,
  open(): void,
  close(): void,
  toggle(): void
}

export interface IUsePopperToggle {
  open?: boolean,
  setOpen?: TSetOpen
}

export interface IPopperProps {
  target?: ComponentType<ITargetProps>,
  id?: string,
  viewModel: IPopperViewModel,
  children?: ReactNode,
  anchorEl?: RefObject<HTMLElement>,
  options?: Omit<Partial<PopperJS.Options>, 'modifiers'>
}

export interface IPopperPortalProps {
  children: ReactNode,
  anchorEl: RefObject<HTMLElement>
}

export type TPopperContext = IPopperProps
