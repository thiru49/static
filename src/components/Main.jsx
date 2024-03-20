import React from 'react'
import { leftArow, rectangle, rightArow, slideNumber } from '../assets'
import Button from '../ui/Button'
import Heading from '../ui/Heading'

const Main = () => {
  return (
    <main className='flex justify-between '>
        <section className='flex flex-col justify-center items-center basis-1/3 gap-8'>
            <div>
                <Heading className='text-gray-300 text-6xl font-[300]'>PROJECT</Heading>
                <h1 className='text-gray-800 text-6xl '>Lorum</h1>
            </div>
            <div className='flex justify-between gap-5 m-5'>
                <Button img={leftArow}/>
                <Button img={rightArow}/>
                 
            </div>
            <div>
                <img src={slideNumber} alt="slideNumber" />
            </div>
        </section>
        <section className='relative'>
            <div className='w-full h-full object-contain'>
            <img src={rectangle} alt="" className='object-cover'/>
            </div>
            
            <div className='absolute bottom-0 left-2'> 
            <Button name="VIEW PROJECT" img={leftArow}/>
            </div>
            
        </section>
    </main>
  )
}

export default Main