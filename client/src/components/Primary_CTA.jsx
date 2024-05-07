import React from 'react'

const Primary_CTA = ({text}) => {
    return (
        <div className='cursor-pointer rounded-full border-2 px-[42px] py-[22px] hover:bg-[#F1F1F1]'>
            <button className='text-lg'>{text}</button>
        </div>
    )
}

export default Primary_CTA