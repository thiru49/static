import React from 'react'

const Heading = ({children,h}) => {
  return (
    <h1 className={`text-gray-300 text-6xl font-[300] uppercase ${h==='small'? 'text-4xl' :''}`}>
        {children}</h1>

  )
}

export default Heading