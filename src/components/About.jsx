import React from 'react'
import { content } from '../constants'
import Button from '../common/Button'
import { leftArow, rectangle10, rectangle8, rectangle9 } from '../assets'
import Heading from '../common/Heading'

function About() {
    console.log(content)
  return (
    <section className='flex m-20 gap-4'>
        <div className='w-2/3'>
            <section className='flex gap-4'>
                <div className='flex flex-col gap-4'>
                <img src={rectangle8} alt="" />
                <img src={rectangle10} alt="" />
                </div>
                <div className='flex flex-col justify-center'>
                <img src={rectangle9} alt="" />
                </div>
               
            </section>
            <section></section>
        </div>
        <div className='w-1/3 p-2 flex flex-col justify-between'>
            <section className='flex flex-col gap-3'>  
                <Heading>About</Heading>
            <p>{content.para1}</p></section>                
            <section>
                <Button name="READ MORE" img='leftArow'/></section>               
        </div>
    </section>
  )
}

export default About