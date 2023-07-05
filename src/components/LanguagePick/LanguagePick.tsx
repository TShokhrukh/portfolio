import React, { useRef } from 'react'
import { Observer } from 'mobx-react'
import { Text } from '@eo-locale/react'
import { Button } from '../Button/Button'
import { Popper } from '../Popper/Popper'
import { cnLanguagePick } from './LanguagePick.const'

import type { ILanguagePickProps } from './__types__'

export const LanguagePick: React.FC<ILanguagePickProps> = ({
  id,
  viewModel,
  className,
  ...props
}) => {
  const anchorEl = useRef<HTMLElement>(null)
  return (
    <Popper id={id} viewModel={viewModel} anchorEl={anchorEl}
      target={(targetProps) => (
        <Button {...props} {...targetProps} innerRef={anchorEl} className={cnLanguagePick({}, [className])}>
          <Observer>
            {() => <Text id={`language.${viewModel.current}`} />}
          </Observer>
        </Button>
      )}>
      { viewModel.supported.map(lang => (
        <Button key={lang} onClick={() => viewModel.setLocal(lang)}>
          <Text id={`language.${lang}`} />
        </Button>
      )) }
    </Popper>
  )
}

LanguagePick.defaultProps = {
  id: cnLanguagePick()
}
