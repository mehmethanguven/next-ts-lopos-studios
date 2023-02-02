import Link from 'next/link'
import React from 'react'
import { INavLink } from '../../types/index'

const NavItem = ({ title, url }: INavLink) => {
  return (
    <div className="group">
      <Link href={url} className="capitalize">
        {title}
      </Link>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  )
}

export default NavItem
