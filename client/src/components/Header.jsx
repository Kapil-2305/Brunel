import React from 'react'
import Grid from '../assets/Grid.png'
import Girl_Image from '../assets/girl_image.png'
import bag_logo from '../assets/bag-logo.png'
import Rocket from '../assets/Rocket.png'
import sparks from '../assets/sparks.png'
import Secondary_CTA from './Secondary_CTA'
import { FaArrowRight } from 'react-icons/fa'
import Slider from './Slider'

const Header = () => {
    return (
        <div className=''>
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

            <div className='relative pt4'>
                <img className='-z-20 absolute right-0' src={Grid} />
                <div className='flex gap-72 items-center justify-center pt-24'>
                    <div className='relative'>
                        <img className='rounded-3xl' src={Girl_Image} />

                        <div className='bg-white rounded-full w-20 h-20 flex items-center justify-center absolute top-16 right-6'>
                            <img src={bag_logo} />
                        </div>

                        <div className='absolute bottom-10 -left-14'>
                            <div className='flex gap-2 bg-white rounded-full p-3 drop-shadow-xl'>
                                <div className='h-14 w-14 bg-[#DDEFE0] rounded-full flex justify-center items-center'>
                                    <img src={Rocket} />
                                </div>
                                <div className='px-3'>
                                    <p className='font-bold text-2xl'>10 Days</p>
                                    <p className='text-[#828282]'>Staff Deployment</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#002E18] absolute p-10 rounded-3xl flex flex-col gap-4 -bottom-12 -end-28 border-s border-t border-slate-700'>
                            <div className='flex gap-2 items-end'>
                                <p className='text-white font-medium text-5xl'>$0.5</p>
                                <p className='text-[#A6A3A0] text-xl uppercase'>Million</p>
                            </div>
                            <div className='text-[#CCCCCC] font-medium max-w-52 text-lg'>
                                Reduced client expenses by saving on hiring and employee costs.
                            </div>
                        </div>

                        <div className='absolute bg-white rounded-3xl p-10 drop-shadow-lg top-24 -left-36'>
                            <div className='relative'>
                                <img className='absolute -top-16 -left-10' src={sparks} />
                                <h1 className='font-semibold text-5xl'>40%</h1>
                            </div>
                            <div className='font-medium text-[#828282] max-w-52 text-xl'>
                                Achieved reduction in project execution time by optimising team availability
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-32'>
                        <Slider />
                        <Secondary_CTA text={"Explore More"} icon={<FaArrowRight/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header