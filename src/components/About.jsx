import React from 'react';
import { content } from '../constants';
import Button from '../common/Button';
import { leftArow, rectangle10, rectangle8, rectangle9 } from '../assets';
import Heading from '../common/Heading';

function About() {
    console.log(content);
    return (
        <section className='flex flex-col sm:flex-row mt-20 gap-4'>      
            <div className='sm:w-1/2 h-full flex gap-5'>
                    <div className='flex flex-col gap-4'>
                        <div>
                        <img src={rectangle8} alt="" className='w-full h-full' />
                        </div>
                       <div>
                       <img src={rectangle10} alt="" className='w-full h-full' />
                       </div>
                       
                    </div>                 
                    <div className='flex flex-col justify-center'>
                        <div>
                        <img src={rectangle9} alt="" className='w-full h-full' />
                        </div>
                    </div>    
            </div>
            <div className='sm:w-1/2 p-2 flex flex-col justify-between'>          
                <section className='flex flex-col gap-3'>
                    <Heading h='small'>About</Heading>
                    <p className=''>{content.para1}</p>
                </section>
                <section>
                    <Button name="READ MORE" img={leftArow} />
                </section>
            </div>
        </section>
    );
}

export default About;
