import React, { useEffect, useState } from 'react'
import { Text } from '@eo-locale/react'
import { Link } from '~/components/Link'
import { cnNav } from '../Nav.const'
import { useNavContext } from '../lib/useNavContext'
import type { INavItemProps } from '../__types__'

export const NavItem: React.FC<INavItemProps> = ({
  link
}) => {
  const [isActive, setActive] = useState<boolean>(false)
  const { active } = useNavContext()

  useEffect(() => {
    setActive(link.href === active)
  }, [active])

  return (
    <li className={cnNav('Item', { active: isActive })}>
      <Link href={link.href} className={cnNav('ItemLink')}>
        <Text id={link.label} />
      </Link>
    </li>
  )
}
