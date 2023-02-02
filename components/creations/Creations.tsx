import { creationImages } from '@/data'
import React from 'react'
import CreationItem from './CreationItem'

const Creations = () => {
  return (
    <section id="creations">
      {/* Creations container */}
      <div className="container mx-auto my-32 max-w-6xl px-6 text-gray-900 md:px-0">
        {/* Creations header */}
        <div className="mb-20 flex justify-center md:justify-between">
          <h2 className="text-center text-4xl uppercase md:text-left md:text-5xl">
            Our Creations
          </h2>

          <button className="btn hidden md:block">See All</button>
        </div>
        {/* Items Container */}
        <div className="grid w-full grid-cols-1 gap-6 text-2xl uppercase text-white md:grid-cols-4">
          {(creationImages || []).map((item, id) => (
            <CreationItem key={id} {...item} />
          ))}
        </div>
        {/* <!-- Bottom Button Container --> */}
        <div className="mt-10 flex justify-center md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  )
}

export default Creations
