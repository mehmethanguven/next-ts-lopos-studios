import { INavLink } from '@/types/index'
import React from 'react'

export const MobileNavItem = ({ title, url }: INavLink) => {
  return (
    <a href={url} className="hover:text-pink-500">
      {title}
    </a>
  )
}
