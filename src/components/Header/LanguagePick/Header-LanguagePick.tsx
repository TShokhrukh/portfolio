import React from 'react'
import { LanguagePick } from '~/components/LanguagePick'
import { useHeaderContext } from '../lib/context'
import { cnHeader } from '../Header.const'

export const HeaderLanguagePick = () => {
  const { viewModel } = useHeaderContext()

  return <LanguagePick viewModel={viewModel.language} className={cnHeader('LanguagePick')} />
}
