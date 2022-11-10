import React from 'react'
import Image from 'next/image'

function SmallCard({location, img, distance}) {
    
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transfor duration-200 ease-out'>
        {/* Left */}
        <div className='relative h-16 w-16'>
            <Image 
                src={img}
                fill={true}
                className='rounded-lg'
            />
        </div>
        {/* Right */}
        <div>
            <h1>{location}</h1>
            <h2 className='text-gray-500'>{distance}</h2>
        </div>
    </div>
  )
}

export default SmallCard