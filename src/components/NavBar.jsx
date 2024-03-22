import React, { useState } from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { NavLink } from 'react-router-dom';
import menu from '../assets/OIP.jpeg';
import close from '../assets/close.svg';

const NavBar = () => {
  const [active, setActive] = useState('main');
  const [show, setShow] = useState(false);

  return (
    <nav className='flex md:px-4 md:py-8 justify-between items-center md:h-28 p-8 px-16 relative transition-all'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className='hidden md:flex justify-between gap-16'>
        {navLinks.map(item => (
          <li key={item.id}
            className={`uppercase hover:border-y-2 hover:border-slate-700 transition-all ${active === item.id ? 'border-y-4 border-slate-700' : ""}`}
            onClick={() => setActive(item.id)}>
            <NavLink to={item.id}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='md:hidden w-7 h-7 flex items-center justify-center transition-transform duration-300 ease-in-out bg-black'>
        <img src={show ? close : menu} className='w-full h-full object-contain cursor-pointer ' onClick={() => setShow(!show)} />
      </div>
      {
        show &&   <ul className='md:hidden flex flex-col absolute top-20 right-16 bg-stone-700 text-stone-200 rounded-md gap-2 items-center shadow-xl'>
        {navLinks.map(item => (
          <li key={item.id}
            className={`uppercase transition-all border-b-2 border-stone-500 last:border-none w-full text-center hover:scale-75 m-2 shadow-xl`}
            onClick={() =>{ setActive(item.id)
            setShow(!show)}}>
            <NavLink to={item.id}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      }
    </nav>
  );
}

export default NavBar;
