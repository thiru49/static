import React, { useState } from 'react';
import { navLinks } from '../constants';
import { logo } from '../assets';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [active,setActive] = useState('main')
  return (
    <nav className='flex px-4 py-8 justify-around items-center h-28'>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className='flex justify-between gap-16'>
        {navLinks.map(item => (
          <li key={item.id}
            className={`uppercase hover:border-y-2 hover:border-slate-700 transition-all ${active===item.id ? 'border-y-4 border-slate-700' :""}`} onClick={()=>{
              setActive(item.id)
            }}>
            <NavLink
              to={item.id}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
