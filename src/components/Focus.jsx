import React from 'react'
import Heading from '../common/Heading'
import { content } from '../constants'
import Section from '../common/Section'

const Focus = () => {
  return (
    <div className='mt-20 flex flex-col gap-10'>
        <Heading>
        Main Focus/Mission Statement
        </Heading>
        <div className='flex gap-20'>
          
            <Section number={1} para={content.para2}/>
            <Section number={2} para={content.para3}/>
  
        </div>
    </div>
  )
}

export default Focus