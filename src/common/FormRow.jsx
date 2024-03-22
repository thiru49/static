import React, { useState } from 'react'

function FormRow({name}) {
    const [focused,setFocused] = useState(false)
  return (
    <div className='relative py-2'>
            <label  className={`block absolute z-10 transition-all ${focused ? 'text-sm -top-8 text-gray-600' : 'text-gray-600'} m-3 block`} htmlFor={name}>{name}</label>
            {name === 'message'?<>
            <textarea
            id={name}
              type="text" 
              className="w-full bg-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:bg-white focus:ring focus:border-blue-500"
              onFocus={() => setFocused(true)}
              onBlur={(e) => {
                if (!e.target.value) {
                  setFocused(false);
                }
              }}
            />
            </>:<input 
            id={name}
              type="text" 
              className="block w-full bg-gray-300 p-3 pl-10 rounded-md focus:outline-none focus:bg-white focus:ring focus:border-blue-500"
              onFocus={() => setFocused(true)}
              onBlur={(e) => {
                if (!e.target.value) {
                  setFocused(false);
                }
              }}
            />}
          </div>
  )
}

export default FormRow