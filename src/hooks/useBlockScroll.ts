import { useEffect } from 'react'

export const useBlockScroll = (isBlock: boolean): void => {
  useEffect(() => {
    document.body.style.overflowY = isBlock ? 'hidden' : ''
  }, [isBlock])

  useEffect(() => {
    return () => {
      document.body.style.overflowY = ''
    }
  }, [])
}
