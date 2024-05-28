import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-black text-white grid grid-cols-4  p-2'>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'> <Link to="home">About</Link></li>
        <p>Developer: Gaganjot Singh</p>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="knowledge">Knowledge</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="">--MERN</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="">--React-Toolkit</Link></li>
      </div>
      <div>
      <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="about">Links</Link></li>
      <li className='hover:underline list-none p-4 text-center'><Link to="home">--Home</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="services">--Services</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="about">--About</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="contact">--Contact</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="portfolio">--Portfolio</Link></li>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="#">Have a query</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">--Gmail: jot77430@gmail.com</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">--Phone: +91-77430-61346</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">--Linkdin</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">--Instagram</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">--Facebook</Link></li>
      </div>
    </div>
  )
}

export default Footer