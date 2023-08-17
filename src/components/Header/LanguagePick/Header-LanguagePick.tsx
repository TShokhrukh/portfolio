import React from 'react'
import { LanguagePick } from '~/components/LanguagePick/build'
import { HeaderContext } from '../libs/context'
import { cnHeader } from '../Header.const'

import type { IHeaderContext } from '../__types__'

export const HeaderLanguagePick = () => {
  const { viewModel } = React.useContext<IHeaderContext>(HeaderContext)

  return <LanguagePick viewModel={viewModel.language} className={cnHeader('LanguagePick')} />
}
