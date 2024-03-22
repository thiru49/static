import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function AppLayout() {
  return (
    <div>
        <NavBar/>
        <main className='max-w-[1170px] xl:mx-auto md:mx-20 mx-8'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default AppLayout