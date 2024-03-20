import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import About from './components/About'
import Focus from './components/Focus'
import Projects from './components/Projects'


export default function App() {
  return (
    <div>
      <NavBar/>
      <Main/>
      <About/>
      <Focus/>
      <Projects/>
    </div>
  )
}
