import React from 'react'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import { image15, image16, image17, image18, leftArow, rectangle17 } from '../assets'

const Projects = () => {
  return (
    <div className='p-4'>
        <Heading>
        Our Projects
        </Heading>
        <section className='mt-10 flex flex-col gap-4'>
            <div className='flex gap-4 justify-between'>
                <div className='w-1/2'>
                    <img src={rectangle17} alt="" />
                </div>
                <div className='w-1/2'>
                    <img src={image15} alt="" />
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/5'>
                    <img src={image16} alt=""/>
                </div>
                <div className='w-3/5 justify-center items-center'>
                    <img src={image17} alt="" />
                </div>
                <div className='w-2/5'>
                    <img src={image18} alt="" />
                </div>
            </div>
        </section>
        <section>
            <Button name='ALL PROJECTS ' img={leftArow}/>

        </section>
    </div>
  )
}

export default Projects