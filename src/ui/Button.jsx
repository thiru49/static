import React from 'react'


function Button({img,name,color}) {
    
  return (
    <button className='flex items-center bg-white transition-all hover:scale-125 px-4 pt-2 rounded-md shadow-md'> 
        {name && <span>{name}</span>}
       <img src={img} alt=""/>
    </button>
  )
}

export default Button