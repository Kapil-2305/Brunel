import React from 'react'
import Union from '../assets/Union.png'
import Combo from './Combo'

const questions = [
    {
        question: 'Do you offer freelancers?',
        answer: 'We do not directly offer freelancers, but we can assist you in finding and vetting highly skilled independent professionals for your project needs.'
    },
    {
        question: `What’s the guarantee that I will be satisfied
        with the hired talent?`,
        answer: 'Our rigorous screening process, backed by AI-powered assessments and human evaluations, ensures that the talent you hire meets the highest standards of expertise and professionalism.'
    },
    {
        question: 'Can I hire multiple talents at once?',
        answer: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.'
    },
    {
        question: 'Why should I not go to an agency directly?',
        answer: 'By working with us, you gain access to a curated pool of top-tier talent without the overhead costs and long-term commitments associated with agencies.'
    },
    {
        question: `Who can help me pick a right skillset
        and duration for me?`,
        answer: 'Our dedicated team of project consultants can provide personalized guidance to help you identify the ideal skill set and duration for your specific requirements.'
    }
]

const Questions = () => {
  return (
    <div className='relative m-12 mt-36 bg-[#E8EEE7] p-24 rounded-3xl flex justify-between h-[685px]'>
        <div className='absolute left-6 -bottom-12'>
            <img src={Union} />
        </div>
        <div className='flex flex-col gap-2'>
            <div className='covered-by-your-grace text-2xl text-[#9E9D9D] font-medium'>
                What’s on your mind
            </div>
            <div className='font-semibold text-5xl'>
                Ask Questions
            </div>
        </div>
        <div className='lg:w-[721px] md:w-[521px] mt-6 overflow-hidden'>
            {
                questions.map((qe, index)=>(
                    <div className={`mx-6 py-6 ${index != questions.length-1 && "border-b-2 border-[#D7D7D7]"}`}>
                        <Combo question={qe.question} answer={qe.answer} index={index}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Questions;