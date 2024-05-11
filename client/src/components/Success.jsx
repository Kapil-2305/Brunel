import React, { useEffect, useState } from 'react'
import logo from '../assets/Brunel_logo.png'
import { FaCheckCircle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Success = () => {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(5);

    useEffect(()=>{
        const timer = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);

        const redirect = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => {
            clearInterval(timer);
            clearTimeout(redirect);
        }
    }, [navigate])
    return (
        <div className='flex flex-col h-screen justify-between '>
            <div className='p-6'>
                <Link className='cursor-pointer' to='/'>
                    <img src={logo} />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-[#2DA950] mb-6'>
                    <FaCheckCircle size={56}/>
                </div>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className='covered-by-your-grace text-[#2DA950] text-4xl'>
                        Success Submitted
                    </p>
                    <p className='font-semibod text-5xl'>
                        Congratulations
                    </p>
                    <p className='text-[#727272] text-2xl text-center w-6/12'>
                        Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
                    </p>
                </div>
            </div>
            <div className='flex gap-1 justify-center mb-12'>
                <p className='text-[#727272] '>Redirecting you to Homepage in </p>
                <p className='font-semibold text-[#1C1C1C]'>{seconds} Seconds</p>
            </div>
        </div>
    )
}

export default Success