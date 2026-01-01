import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Project from './Pages/Project/Project'


const App = () => {
  return (
    <div>
       <Navbar/>
         <Routes>
             <Route path='/'element={<Home/>}/>
             <Route path='/Project' element={<Project/>}/>
         </Routes>
         <Footer/>
         
    </div>
  )
}

export default App
