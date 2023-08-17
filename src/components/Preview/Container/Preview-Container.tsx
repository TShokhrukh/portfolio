import { withBemMod } from '@bem-react/core'
import { Container } from '~/components/Container/build'
import { cnPreview } from '../Preview.const'
import './Preview-Container.scss'

export const PreviewContainer = withBemMod(cnPreview('Container'), {})(Container)
