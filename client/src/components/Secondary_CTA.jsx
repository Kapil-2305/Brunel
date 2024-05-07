import React from 'react'

const Secondary_CTA = ({text}) => {
    return (
        <div className='cursor-pointer rounded-full border-2 px-[42px] py-[22px] bg-black text-white hover:bg-[#4E4E4E]'>
            <button className='text-lg'>{text}</button>
        </div>
    )
}

export default Secondary_CTA