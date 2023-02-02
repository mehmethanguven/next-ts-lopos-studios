import { IImage } from '@/types/index'
import Image from 'next/image'
import React from 'react'

const CreationItem = ({ title, imageName }: IImage) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="hidden md:block">
        <Image
          src={`/images/desktop/${imageName}`}
          alt={title}
          className="w-full duration-200 group-hover:scale-110"
          height={0}
          width={0}
          sizes="100vh"
        />
      </div>
      <div className="md:hidden">
        <Image
          src={`/images/mobile/${imageName}`}
          alt={title}
          className="w-full duration-200 group-hover:scale-110"
          height={0}
          width={0}
          sizes="100vh"
        />
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-transparent to-gray-900 group-hover:from-gray-50 group-hover:to-white group-hover:opacity-70"></div>
      <h5 className="duraton-200 absolute bottom-4 w-52 px-6 group-hover:scale-110 group-hover:text-black md:bottom-8 md:px-10">
        {title}
      </h5>
    </div>
  )
}

export default CreationItem
