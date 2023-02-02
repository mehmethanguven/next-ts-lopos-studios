import { INavLink } from '@/types/index'
import React from 'react'

const FooterNavItem = ({ title, url }: INavLink) => {
  return (
    <div className="group h-10">
      <a href={url}>{title}</a>
      <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
    </div>
  )
}

export default FooterNavItem
