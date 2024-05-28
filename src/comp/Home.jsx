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
    </>
  )
}

export default Home