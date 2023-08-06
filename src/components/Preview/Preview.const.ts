import { cn } from '@bem-react/classname'
import { environment } from '~/environment'

type TSocial = {
  icon: string,
  href: string
}

export const cnPreview = cn('Preview')

export const social: TSocial[] = [
  {
    icon: 'github',
    href: environment.contacts.git
  }
]

export const cvLink = ''
