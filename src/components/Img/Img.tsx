import React, { useState, FC } from 'react'
import { useIntersectionObserver } from '~/hooks/useIntersectionObserver'
import { cnImg } from './Img.const'

import plug from './res/plug.png'
import type { IImgProps } from './__types__'
import './Img.scss'

export const Img: FC<IImgProps> = ({
  className,
  src,
  plugSrc: preSrc = plug,
  alt = '...',
  showPlug = true,
  ...props
}) => {
  const [state, setState] = useState(() => !showPlug)
  const ref = useIntersectionObserver<HTMLImageElement>(() => {
    setState(true)
  })

  return (
    <img {...props} ref={ref}
      src={state ? src : preSrc} alt={alt}
      className={cnImg({}, [className])} />
  )
}
