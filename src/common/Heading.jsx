import React from 'react';

const Heading = ({ children, h }) => {
  return (
    <h1 className={`text-gray-300 text-3xl sm:text-6xl font-[300]  ${h === 'small' ? 'text-2xl sm:text-4xl' : 'text-3xl sm:text-6xl uppercase'}`}>
      {children}
    </h1>
  );
}

export default Heading;
