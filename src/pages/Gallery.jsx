import React from 'react'
import Heading from '../common/Heading'
import { gallery } from '../constants'

const Gallery = () => {
  return (
    <div >
      <Heading>
        Photo
      </Heading>
      <h1 className='text-gray-800 text-6xl leading-[64px] font-bold'>Gallery</h1>
      <div className='grid grid-cols-5 gap-4 mt-6'>
        {gallery.map((img,id)=><div key={id}>
          <img src={img}/>
          </div>)}
      </div>
      
    </div>
  )
}

export default Gallery