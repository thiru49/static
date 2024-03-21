
import {BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import MainPage from './pages/MainPage'
import Gallery from './pages/Gallery'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'


export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route element={<AppLayout/>}>
       <Route index element={<Navigate replace to='main' />} />
       <Route path='main' element={<MainPage/>}/>
       <Route path='gallery' element={<Gallery/>}/>
       <Route path='projects' element={<Projects/>}/>
       <Route path='certifications' element={<Certifications/>}/>
       <Route path='contact' element={<Contact/>}/>
    </Route>
  </Routes>
    </BrowserRouter> 
  )
}
