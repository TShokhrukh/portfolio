import vmajlis from '~/static/img/vmajlis.png'
import itpu from '~/static/img/itpu.png'
import type { TProjectsList } from '~/types'

export const PROJECTS: TProjectsList = [
  {
    id: '1',
    name: 'vMajlis',
    href: '#',
    desc: {
      en: 'Develop the interface for a video communication system',
      ru: 'Разработал интерфейса для системы видео связи'
    },
    stack: ['JavaScript'],
    image: vmajlis
  },
  {
    id: '2',
    name: 'ITPU',
    href: 'https://itpu.uz',
    desc: {
      en: 'Develop some custom blocks for Bitrix24',
      ru: 'Разработал некоторые пользовательские блоки для Bitrix24'
    },
    stack: ['JavaScript', 'Bitrix24'],
    image: itpu
  },
  {
    id: '3',
    name: 'Admission Portal',
    href: 'https://my.itpu.uz/',
    desc: {
      en: 'Develop the portal interface for students',
      ru: 'Разработал интерфейс портала для студентов'
    },
    stack: ['JavaScript', 'React'],
    image: itpu
  }
]
