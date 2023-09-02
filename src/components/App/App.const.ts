import { cn } from '@bem-react/classname'

export const cnApp = cn('App')

export const links = [
  {
    href: '#preview',
    label: 'nav.preview'
  },
  {
    href: '#experience',
    label: 'nav.experience'
  },
  {
    href: '#about_me',
    label: 'nav.aboutMe'
  },
  {
    href: '#projects',
    label: 'nav.projects'
  },
  {
    href: '#skills',
    label: 'nav.skills'
  },
  {
    href: '#career',
    label: 'nav.career'
  }
]

export { PROJECTS as projects } from '~/static/data/projects'
export { SKILLS as skills } from '~/static/data/skills'
export { EXPERIENCE as experience } from '~/static/data/experience'
export { CAREERS as careers } from '~/static/data/careers'
