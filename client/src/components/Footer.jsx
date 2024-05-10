import React from 'react'
import C_Tag from '../assets/C_Tag.png'

const Footer = () => {
  return (
    <div className='flex justify-between bg-[#F5F5F5] p-12 rounded-3xl mx-12 my-8'>
        <div className='flex gap-2'>
            <img src={C_Tag} />
            <p className='font-medium'>Talup 2023. All rights reserved</p>
        </div>
        <div className='flex gap-12 underline'>
            <p className='cursor-pointer'>Terms & Conditions</p>
            <p className='cursor-pointer'>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer