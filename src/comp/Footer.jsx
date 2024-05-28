import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-black text-white grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 p-2'>
      <div>
        <li className='hover:underline list-none p-4 text-center'><Link to="home">Home</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="services">Services</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="portfolio">Portfolio</Link></li>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center'><Link to="about">About</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="contact">Contact</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="portfolio">Portfolio</Link></li>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">social account</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">insta</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="#">fb</Link></li>
      </div>
    </div>
  )
}

export default Footer