import type { ElementType } from 'react'

export interface IComponentProp<P = any> {
  component?: ElementType<P>,
}
