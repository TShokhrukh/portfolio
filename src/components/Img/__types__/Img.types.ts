import type { IClassNameProps } from '@bem-react/core'

export interface IImgProps extends IClassNameProps {
  src?: string,
  plugSrc?: string,
  alt?: string,
  showPlug?: boolean
}
