import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  const [isToggle,setIsToggle]=useState(0) ;
  return (
    <nav className='flex justify-between bg-black text-white font-bold '>
      <span className='p-4 '>Gaganjot Singh</span>
      
      
      <ul className='flex gap-6 p-4'>
        <li className=' hidden md:block   hover:underline ' ><Link to="home">Home</Link></li>
        <li  className=' hidden md:block   hover:underline ' ><Link to="knowledge">Knowledge </Link></li>
        <li className=' hidden md:block   hover:underline ' ><Link to="contact">Contact</Link></li>
        <li className=' hidden md:block   hover:underline ' ><Link to="portfolio">Portfolio</Link></li>
        <li className=' hidden md:block   hover:underline ' ><Link to="about">About</Link></li>
        {
          (isToggle?<></>:<>
          <li className=' lg:hidden md:hidden '><input type="checkbox" name="toggle" id="toggle" onClick={()=>{
           (isToggle?setIsToggle(0):setIsToggle(1))
        }}/>
          =</li>
          </>)
        }
          {(isToggle?<li ><Link onClick={()=>{setIsToggle(0)}}>X</Link></li>:<li></li>)}
      </ul>
    </nav>
  )
}

export default Nav