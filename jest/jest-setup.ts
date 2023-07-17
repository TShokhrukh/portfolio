import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'
import { IntersectionObserverMock } from './mock/IntersectionObserverMock '

// @ts-ignore
global.TextEncoder = TextEncoder
// @ts-ignore
global.TextDecoder = TextDecoder
// @ts-ignore
global.IntersectionObserver = IntersectionObserverMock
