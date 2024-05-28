import React from 'react'
import HeroSection from './HeroSection.jsx'

import About from './About.jsx'
import Portfolio from './Portfolio.jsx'
import Knowledge from './Knowledge.jsx'
import Contact from "./Contact.jsx"



function Home() {
  return (
    <>
    <HeroSection/>
    <About/>
    <Knowledge/>
    <Portfolio/>
    <Contact/>
   
      <button  className="bg-black text-white hover:text-black hover:bg-white hover:rounded-lg m-2 hover:border border-black "onClick={()=>{window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })}}>^</button>
   
    </>
  )
}

export default Home