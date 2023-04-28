import type { ComponentType } from 'react'

export type { ILocalizationService } from '~/types'

export type TWrapperProps<T extends ComponentType<any>> = T extends ComponentType<infer P> ? P : {}
