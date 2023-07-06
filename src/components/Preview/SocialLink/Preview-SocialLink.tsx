import { withBemMod } from '@bem-react/core'
import { Link } from '~/components/Link/Link'
import { cnPreview } from '../Preview.const'

import './Preview-SocialLink.scss'

export const PreviewSocial = withBemMod(cnPreview('SocialLink'), {})(Link)
