import React from 'react'
import Heading from '../common/Heading'
import Button from '../common/Button'
import { projects } from '../constants'

const Projects = () => {
  return (
    <div>
      <Heading>
        Our
      </Heading>
      <h1 className='text-gray-800 text-6xl leading-[64px] font-bold'>Projects</h1>
     <div>
      {projects.map((item)=><div key={item.title} className='flex'>
      <section>
          <img src={item.image} alt="" className='w-[100%] h-[100%]' />
        </section>
        <section>
          <Heading h='small'>
            {item.title}
          </Heading>
          <p className="font-roboto text-base font-light leading-6 text-left">
            {item.des}
          </p>
        <Button name='VIEW MORE' img='leftArow'/>
        </section>
      </div>)}
       
      </div>
    </div>
  )
}

export default Projects