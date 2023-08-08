import type { IClassNameProps } from '@bem-react/core'

export interface IImgProps extends IClassNameProps {
  src?: string,
  plugSrc?: string,
  title?: string,
  alt?: string,
  showPlug?: boolean
}
