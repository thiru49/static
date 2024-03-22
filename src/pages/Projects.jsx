import React from 'react';
import Heading from '../common/Heading';
import Button from '../common/Button';
import { projects } from '../constants';

const Projects = () => {
  return (
    <div>
      <Heading>
        Our
      </Heading>
      <h1 className='text-gray-800 text-6xl leading-[64px] font-bold'>Projects</h1>
     <div className='flex flex-col gap-8 mt-6 '>
      {projects.map((item) => (
        <div key={item.title} className='flex max-w-[1170px] max-h-[435] shadow-lg gap-8'>
          <section className='w-1/2'>
            <img src={item.image} alt="" className='w-[100%] h-[100%]' />
          </section>
          <section className='w-1/2 flex flex-col justify-around'>
            <Heading h='small' className='text-orange-500'>
              {item.title}
            </Heading>
            <p className="font-roboto text-base font-light leading-6 text-left">
              {item.des}
            </p>
            <div>
            <Button name='VIEW MORE' img='leftArow' color='orange' /> 
            </div>
            
          </section>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Projects;
