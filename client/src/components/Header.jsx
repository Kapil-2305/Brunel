import React from 'react'
import Grid from '../assets/Grid.png'
import Girl_Image from '../assets/girl_image.png'
import bag_logo from '../assets/bag-logo.png'
import Rocket from '../assets/Rocket.png'

const Header = () => {
    return (
        <div>
            <div className='flex items-center justify-center pt-10'>
                <div className='flex flex-col items-center gap-2 max-w-xl'>
                    <div className='covered-by-your-grace text-[#2DA950] text-4xl'>
                        Success Stories
                    </div>
                    <div className='manrope text-[#1C1C1C] text-5xl text-center'>
                        Every success journey we’ve encountered.
                    </div>
                </div>
            </div>

            <div className='relative pt-4'>
                <img className='-z-20 absolute right-0' src={Grid} />
                <div className='flex gap-2 items-center justify-center'>
                    <div className='relative'>
                        <img className='rounded-3xl' src={Girl_Image} />
                        <div className='bg-white rounded-full w-20 h-20 flex items-center justify-center absolute top-16 right-6'>
                            <img src={bag_logo} />
                        </div>
                        <div>
                            <div className='flex gap-2 bg-white rounded-full'>
                                <div className='h-12 w-12 bg-[#DDEFE0] rounded-full flex justify-center items-center'>
                                    <img src={Rocket} />
                                </div>
                                <div>
                                    <p className='manrope font-[800]'>10 Days</p>
                                    <p>Staff Deployment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>second</div>
                </div>
            </div>
        </div>
    )
}

export default Header