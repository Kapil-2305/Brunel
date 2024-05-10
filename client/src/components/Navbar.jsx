import React from 'react'
import logo from '../assets/Brunel_logo.png'
import vector from '../assets/Vector.png'
import Primary_CTA from './Primary_CTA'
import Secondary_CTA from './Secondary_CTA'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-2 rounded-full pl-[52px] pr-[21px] py-[17px] m-4'>
            <div className='cursor-pointer'>
                <img src={vector} />
            </div>
            <div className='flex gap-2'>
                <Primary_CTA text={"Get Projects"}/>
                <Secondary_CTA text={"Onboard Talent"} />
            </div>
        </div>
    )
}

export default Navbar