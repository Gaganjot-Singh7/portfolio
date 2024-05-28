import React from 'react'

function HeroSection() {
  return (
    <div className='bg-gray-100 grid lg:grid-cols-2 md:grid-cols-1'>
        <div className='   text-center  '> 
        <h1 className='font-bold text-3xl p-5'>Gaganjot Singh</h1>
        <p className='p-2'>MERN Stack Web Developer.Click on the given button to visit my Github Account </p>
        <button className='bg-red-300 px-2  rounded-xl hover:bg-red-900 text-white'><a href="https://github.com/dashboard " target='_blank'>Github</a></button>
        </div>
    <div className=' flex justify-center p-5 '><img src="../../images/Image1.jpg" alt="image" width="250 x 250" className='  ' /></div>
    </div>
  )
}

export default HeroSection