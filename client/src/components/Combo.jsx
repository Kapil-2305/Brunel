import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Combo = ({question, answer, index}) => {
    const [active, setActive] = useState(false);
    const toggle = (active) => {
        setActive(!active)
    }

    return (
        <div className='flex flex-col gap-2'>
            <button onClick={()=> toggle(active)}>
                <div className='flex justify-between'>
                    <div className='font-semibold'>
                        {question}
                    </div>
                    {
                        active ? <FaMinus /> : <FaPlus />
                    }
                </div>
            </button>
            {
                active ? <div className='text-[#617275] text-sm font-light lowercase'>{answer}</div> : <div></div>
            }
        </div>
    )
}

export default Combo