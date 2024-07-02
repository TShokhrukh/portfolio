import itpu from '~/static/img/itpu.png'
import type { TProjectsList } from '~/types'

export const PROJECTS: TProjectsList = [
  {
    id: '1',
    name: 'Admission Portal',
    href: 'https://my.itpu.uz/',
    desc: {
      en: 'Development of the user interface based on a layout and interaction with the backend.',
      ru: 'Разработка пользовательского интерфейса по макету и взаимодействие с бэкендом.'
    },
    stack: ['JavaScript', 'React'],
    image: itpu
  }
]
