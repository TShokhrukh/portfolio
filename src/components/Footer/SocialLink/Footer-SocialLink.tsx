import { withBemMod } from '@bem-react/core'
import { Link } from '~/components/Link'
import { cnFooter } from '../Footer.const'

import './Footer-SocialLink.scss'

export const FooterSocialLink = withBemMod(cnFooter('SocialLink'), {})(Link)
