import React from 'react'
import Image from 'next/image'

const SidebarRow = ({ Icon, title, src}) => {

  return (
    <div className='flex items-center skew-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
        {src && (
                <Image width={30} height={30} src={src} layout='fixed' className='rounded-full' />
            )}
        {Icon && (
            <Icon className='h-6 w-6 text-blue-500' />
        )}
        <p className='hidden sm:inline-flex font-medium pl-4'>{title}</p>
    </div>
  )
}

export default SidebarRow