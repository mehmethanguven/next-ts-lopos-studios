import { ISocialIcon } from '@/types/index'
import Image from 'next/image'
import React from 'react'

const SocialFooterItem = ({ title, url, imageUrl }: ISocialIcon) => {
  return (
    <div className="group h-8">
      <a href={url}>
        <Image
          height={0}
          width={0}
          src={imageUrl}
          alt={title}
          className="h-6 w-6 group-hover:translate-y-0.5"
        />
      </a>
    </div>
  )
}

export default SocialFooterItem
