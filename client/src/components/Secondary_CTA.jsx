import React from 'react'

const Secondary_CTA = ({text, icon}) => {
    return (
        <div className='cursor-pointer rounded-full border-2 px-[42px] py-[22px] bg-black text-white hover:bg-[#4E4E4E] flex items-center justify-center'>
            <button className='text-lg'>{text}</button>
            {
                icon && 
                <div className='ml-3'>
                    {icon}
                </div>
            }
        </div>
    )
}

export default Secondary_CTA