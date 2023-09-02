import { useEffect, useRef, useState, Ref } from 'react'
import { opacity } from '~/utils/animations'

type TOpacityToggle<T extends HTMLElement> = {
  show: boolean,
  target: Ref<T>
}

export function useOpacityToggle<T extends HTMLElement> (isOpen: boolean, duration?: number): TOpacityToggle<T> {
  const target = useRef<T>(null)
  const [show, setShow] = useState<boolean>(() => isOpen)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      return
    }
    setTimeout(() => {
      setShow(false)
    }, duration)
  }, [isOpen])

  useEffect(() => {
    if (!target.current || !show) {
      return
    }
    // opening
    opacity(target.current, [0, 1], duration)
  }, [show])
  useEffect(() => {
    if (!target.current || isOpen) {
      return
    }
    // closing
    opacity(target.current, [1, 0], duration)
  }, [isOpen])

  return {
    target,
    show
  }
}
