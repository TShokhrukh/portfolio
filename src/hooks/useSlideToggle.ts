import { useEffect, useRef, useState, Ref } from 'react'
import { SLIDE_OUT_DURATION, slideIn, slideOut } from '~/utils/animations'

type TFadeToggle<T extends HTMLElement> = {
  show: boolean,
  target: Ref<T>
}

export function useSlideToggle<T extends HTMLElement> (isOpen: boolean, duration: number = SLIDE_OUT_DURATION): TFadeToggle<T> {
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
    slideIn(target.current, '-100%', duration)
  }, [show])
  useEffect(() => {
    if (!target.current || isOpen) {
      return
    }
    // closing
    slideOut(target.current, '-100%', duration)
  }, [isOpen])

  return {
    target,
    show
  }
}
