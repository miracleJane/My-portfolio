import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='z-100 sticky top-0'>
        <div className='w-full bg-pink-300 h-20 flex  '>
           <div className='w-[50%]  flex items-center mx-10'>
               logo
           </div>
           <div className='w-[50%] gap-5 flex  items-center justify-end  mx-10'>
              <h2>Home</h2>
              <h2>About</h2>
              <Link to={'/project'}><h2>Projects</h2></Link> 
              <h2>Contact</h2>
           </div>
        </div>
    </div>
  )
}

export default Navbar