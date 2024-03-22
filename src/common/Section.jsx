import React from 'react'

const Section = ({number,para}) => {
  return (
    <section className='sm:w-1/2'>
        <div className='flex items-center justify-center gap-4'>
        <h1 className='text-[104px] text-gray-300'>{number}</h1>
    <p>{para}</p>
        </div>
   
    </section>

  )
}

export default Section