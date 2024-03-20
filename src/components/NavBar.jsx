import React from 'react'
import { navLinks } from '../constants'
import { logo } from '../assets'

const NavBar = () => {
  return (
    <nav className='flex px-4 py-8 justify-around items-center h-28border-4 border-indigo-500/75'>
        <div>
            <img src={logo} alt="logo" />
        </div>
        <ul className='flex justify-between gap-16'>
        {navLinks.map(item=><li key={item.id}
        className='uppercase hover:border-y-4 hover:border-slate-700 transition-all'>{item.title}</li>)}
        </ul>
    </nav>
  )
}

export default NavBar;
