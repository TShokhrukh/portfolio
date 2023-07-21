import type { IClassNameProps } from '@bem-react/core'
import type { IComponentProp } from '~/types/react'

export interface IAboutMeProps extends IClassNameProps, IComponentProp {

}

export interface IAboutMeContext {
  avatar?: string
}
