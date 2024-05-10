import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const Combo = ({question, answer, index}) => {
    const [active, setActive] = useState(false);
    const toggle = (active) => {
        setActive(!active)
    }

    return (
        <div>
            <div className='flex justify-between'>
                <div className='font-semibold'>
                    {question}
                </div>
                <button onClick={()=> toggle(active)}>
                    {
                        active ? <FaMinus /> : <FaPlus />
                    }
                </button>
            </div>
            {
                active ? <div className='text-[#617275] text-sm font-light lowercase'>{answer}</div> : <div></div>
            }
        </div>
    )
}

export default Combo