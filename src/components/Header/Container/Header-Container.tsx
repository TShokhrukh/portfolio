import { withBemMod } from '@bem-react/core'
import { cnHeader } from '../Header.const'
import { Container } from '../../Container/Container'

import './Header-Container.scss'

export const HeaderContainer = withBemMod(cnHeader('Container'), {})(Container)
