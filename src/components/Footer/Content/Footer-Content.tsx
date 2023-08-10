import { withBemMod } from '@bem-react/core'
import { Container } from '~/components/Container/Container'
import { cnFooter } from '../Footer.const'

import './Footer-Content.scss'

export const FooterContent = withBemMod(cnFooter('Content'), {})(Container)
