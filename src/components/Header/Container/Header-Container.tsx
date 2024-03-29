import { withBemMod } from '@bem-react/core'
import { Container } from '~/components/Container'
import { cnHeader } from '../Header.const'

import './Header-Container.scss'

export const HeaderContainer = withBemMod(cnHeader('Container'), {})(Container)
