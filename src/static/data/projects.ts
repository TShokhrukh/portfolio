import vmajlis from '~/static/img/vmajlis.png'
import itpu from '~/static/img/itpu.png'
import bitrix24 from '~/static/img/bitrix24.png'
import didox24 from '~/static/img/didox24.png'
import type { TProjectsList } from '~/types'

export const PROJECTS: TProjectsList = [
  {
    id: '1',
    name: 'vMajlis',
    href: '#',
    desc: {
      en: 'Development of a user interface based on a template and interaction with the backend.',
      ru: 'Разработка пользовательского интерфейса по шаблону и взаимодействие с бэкендом.'
    },
    stack: ['JavaScript'],
    image: vmajlis
  },
  {
    id: '2',
    name: 'Bitrix24 Blocks',
    href: '№',
    desc: {
      en: 'Development of custom blocks for the Bitrix24.',
      ru: 'Разработка пользовательских блоков для Bitrix24.'
    },
    stack: ['JavaScript', 'PHP'],
    image: bitrix24
  },
  {
    id: '3',
    name: 'Admission Portal',
    href: 'https://my.itpu.uz/',
    desc: {
      en: 'Development of the user interface based on a layout and interaction with the backend.',
      ru: 'Разработка пользовательского интерфейса по макету и взаимодействие с бэкендом.'
    },
    stack: ['JavaScript', 'React'],
    image: itpu
  },
  {
    id: '4',
    name: 'Didox24',
    href: 'https://www.bitrix24.ru/apps/app/tug.didox/',
    desc: {
      en: 'Didox24 application Development',
      ru: 'Разработка приложения Didox24'
    },
    stack: ['JavaScript', 'React'],
    image: didox24
  }
]
