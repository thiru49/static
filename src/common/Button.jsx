import React from 'react';

function Button({ img, name,color }) {
  return (
    <button className={`flex items-center gap-4 ${color === 'black' ? 'bg-stone-900 text-gray-300' : 'bg-white'} transition-all hover:scale-125 px-4 py-2 rounded-md shadow-md`}>
      {name && <span>{name}</span>}
      {/* <img src={img} alt="" className='rounded-md'/> */}
      {img==='leftArow'?<p>&rarr;</p>:<p>&larr;</p>}
    </button>
  );
}

export default Button;
