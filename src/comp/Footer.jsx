import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-black text-white grid grid-cols-4  p-2'>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'> <Link to="home">About</Link></li>
        <p className=' hover:underline list-none p-4 text-center font-bold text-xl'>Developer: Gaganjot Singh</p>
        <p className='hover:underline list-none p-4 text-center font-bold text-xl'>B.tech Cse </p>
        <p className='hover:underline list-none p-4 text-center font-bold text-xl'>8.21 CGPA</p>
        <p className='hover:underline list-none p-4 text-center font-bold text-xl'>English Efficiency :B2</p>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="knowledge">Projects</Link></li>
        <li className='hover:underline list-none p-4 text-center'><a href="https://webnewstech.netlify.app/">News tech(Reactjs-Contextapi)</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="https://rest-api-nu-green.vercel.app/api/products">Products (Rest_API)</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="https://github.com/Gaganjot-Singh7/-mern_project2">Technolex (Mern Stack)</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="3">Reactjs(React-Toolkit)</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="https://gaganjotportfolio.netlify.app/">Portfolio</a></li>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="about">Navigation</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="/">Home</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="knowledge">Knowledge</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="about">About</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="contact">Contact</Link></li>
        <li className='hover:underline list-none p-4 text-center'><Link to="portfolio">Portfolio</Link></li>
      </div>
      <div>
        <li className='hover:underline list-none p-4 text-center font-bold text-xl'><Link to="#">Have a query</Link></li>
        <li className='hover:underline list-none p-4 text-center'><a href="#">Gmail: jot77430@gmail.com</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="#">Phone: +91-77430-61346</a></li>
        <li className='hover:underline list-none p-4 text-center'><a href="https://www.linkedin.com/in/gaganjot-singh-b892b61bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkdin</a></li>

        <li className='hover:underline list-none p-4 text-center'><a href="https://wa.me/message/OQJY2NM26VZHC1">whatsapp</a></li>
      </div>
    </div>
  )
}

export default Footer