import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import MobileLab from './components/MobileLab'
import Advantages from './components/Advantages'
import Timeline from './components/Timeline'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Base URL for assets (works with both development and GitHub Pages)
const BASE_URL = import.meta.env.BASE_URL || ''

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar isScrolled={isScrolled} baseUrl={BASE_URL} />
      <main>
        <Hero />
        <Services />
        <MobileLab baseUrl={BASE_URL} />
        <Advantages />
        <Timeline />
        <Partners baseUrl={BASE_URL} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
