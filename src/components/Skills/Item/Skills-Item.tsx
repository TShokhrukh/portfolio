import { withBemMod } from '@bem-react/core'
import { Img } from '~/components/Img/build'
import { cnSkills } from '../Skills.const'
import './Skills-Item.scss'

export const SkillsItem = withBemMod(cnSkills('Item'), {})(Img)
