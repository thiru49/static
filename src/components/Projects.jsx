import React from 'react';
import Heading from '../common/Heading';
import Button from '../common/Button';
import { image15, image16, image17, image18, leftArow, rectangle17 } from '../assets';

const Projects = () => {
  return (
    <div className='sm:my-10 '>
      <Heading>Our Projects</Heading>
      <section className='mt-10 flex flex-col gap-8 max-h-[550px]'>
        <div className='flex flex-col sm:flex-row gap-4 justify-between'>
          <div className='sm:w-1/2 relative flex justify-center items-center'>
            <div className='absolute text-center text-stone-300 flex flex-col gap-10'>
              <h1 className='font-roboto text-5xl font-bold leading-64 text-left text-white leading-5 flex flex-col gap-6'><span>Sample</span><span>Project</span></h1>
              <Button name='VIEW MORE' img='leftArow' color='black'/>
            </div>
            <img src={rectangle17} alt="" className='size-[100%]'/>
          </div>

          <div className='sm:w-1/2'>
            <img src={image15} alt="" className='size-[100%]'/>
          </div>
        </div>
        <div className='flex gap-4 flex-col sm:flex-row relative'>
          <div className='sm:w-1/5'>
            <img src={image16} alt="" className='size-[100%]'/>
          </div>
          <div className='sm:w-3/5 justify-center items-center'>
            <img src={image17} alt="" className='size-[100%]'/>
          </div>
          <div className='sm:w-2/5'>
            <img src={image18} alt="" className='size-[100%]'/>
          </div>
        </div>
      </section>
      <div className='mt-8 sm:mt-14 flex justify-end'>
        <Button name='VIEW PROJECTS' color='black' img='leftArow'/>
      </div>
    </div>
  );
}

export default Projects;
