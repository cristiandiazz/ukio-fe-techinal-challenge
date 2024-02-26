import React from 'react'
import Image from 'next/image'
import { formatDate } from '../utils/date'

const Card: React.FC<{ name: string, bedrooms: number, bathrooms: number, price: number, availability: string, imageUrl: string }> = ({ name, bedrooms, bathrooms, price, availability, imageUrl }) => {
  return (
    <div className="rounded-xl shadow-lg bg-[#fbf9f8] lg:max-w-md">
      <div className="sm:p-2 lg: p-4 flex flex-col">
        <div className="overflow-hidden">
          <Image priority className="rounded-xl" width={400} height={400} alt="apartment-avatar" src={imageUrl} style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="flex flex-col gap-2 bg-white px-6 md:px-4 md:py-2 rounded-xl mt-2">
          <div>
            <p className="font-heading sm:text-xl lg:text-2xl">{name}</p>
            <div className="flex w-full items-center py-2 text-sm">
              <p>
                {bedrooms}
                {' '}
                bedrooms |
                {' '}
                {bathrooms}
                {' '}
                bathrooms
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-full items-center justify-center text-pretty text-sm lg:text-base bg-white mt-4 rounded-xl">
            <span>
              {price}
              €
              {' '}
              / month
            </span>
          </div>
          <div className="flex w-full items-center justify-center bg-white mt-4 px-6 py-4 rounded-xl">
            <span>
              Av.
              {' '}
              {formatDate(availability)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card