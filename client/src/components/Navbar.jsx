import React from 'react'
import logo from '../assets/Brunel_logo.png'
import vector from '../assets/Vector.png'
import Primary_CTA from './Primary_CTA'
import Secondary_CTA from './Secondary_CTA'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center border-2 rounded-full pl-[52px] pr-[21px] py-[17px] m-4'>
            <div className='cursor-pointer'>
                <Link to={"/"}>
                    <img src={vector} />
                </Link>
            </div>
            <div className='flex gap-2'>
                <Link to={"/form-field"}>
                    <Primary_CTA text={"Get Projects"}/>
                </Link>
                <Secondary_CTA text={"Onboard Talent"} />
            </div>
        </div>
    )
}

export default Navbar