import { useCallback, useEffect, useRef, MutableRefObject } from 'react'

export type TCallback = (e: IntersectionObserverEntry[]) => void
export type TOptions = {
  intersecting?: boolean,
  observer?: {
    rootMargin?: string,
    root?: Element,
    threshold?: number
  }
}
export type TObserverRef<T extends HTMLElement> = MutableRefObject<T|null>

const defOptions: TOptions = {
  intersecting: true
}

export function useIntersectionObserver<T extends HTMLElement> (fn: TCallback, options: TOptions = defOptions): TObserverRef<T> {
  const observer = useRef<IntersectionObserver>()
  const ref = useRef<T>(null)
  const disconnect = useCallback(() => {
    if (!observer.current) {
      return
    }
    observer.current.disconnect()
  }, [observer])

  useEffect(() => {
    disconnect()
    observer.current = new IntersectionObserver((e) => {
      if (options.intersecting) {
        if (e[0].isIntersecting) {
          fn(e)
        }
        return
      }
      fn(e)
    }, options.observer)
  }, [fn, options])

  useEffect(() => {
    if (!observer.current || !ref.current) {
      return
    }
    observer.current.observe(ref.current)
  }, [observer.current, ref])

  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return ref
}
