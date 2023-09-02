import { useEffect, useRef, useState, Ref } from 'react'
import { fadeIn, fadeOut, FADE_OUT_DURATION } from '~/utils/animations'

type TFadeToggle<T extends HTMLElement> = {
  show: boolean,
  target: Ref<T>
}

export function useFadeToggle<T extends HTMLElement> (isOpen: boolean): TFadeToggle<T> {
  const target = useRef<T>(null)
  const [show, setShow] = useState<boolean>(() => isOpen)

  useEffect(() => {
    if (isOpen) {
      setShow(true)
      return
    }
    setTimeout(() => {
      setShow(false)
    }, FADE_OUT_DURATION)
  }, [isOpen])

  useEffect(() => {
    if (!target.current || !show) {
      return
    }
    // opening
    fadeIn(target.current)
  }, [show])
  useEffect(() => {
    if (!target.current || isOpen) {
      return
    }
    // closing
    fadeOut(target.current)
  }, [isOpen])

  return {
    target,
    show
  }
}
