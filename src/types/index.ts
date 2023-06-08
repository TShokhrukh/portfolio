import type { ComponentType } from 'react'

export * from './service.types'

export type TWrapperProps<T extends ComponentType<any>> = T extends ComponentType<infer P> ? P : {}

export interface IModel {
  onMounted?(): void
  onUnmounted?(): void
}
