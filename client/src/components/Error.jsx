import React from 'react'
import Navbar from './Navbar'

const Error = () => {
    return (
        <div className=''>
            <Navbar />
            <div className="covered-by-your-grace flex justify-center items-center text-green-500 text-6xl h-96">
                Error 404 - Page Not Found
            </div>
        </div>
    )
}

export default Error