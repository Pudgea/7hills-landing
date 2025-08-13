import React, { useState } from 'react'

const Navbar = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <img src="/assets/logo.png" className="logo" alt="7Hills Intelligence Logo" />
      
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><button onClick={() => scrollToSection('home')}>Главная</button></li>
        <li><button onClick={() => scrollToSection('services')}>Услуги</button></li>
        <li><button onClick={() => scrollToSection('mobile-lab')}>Переносная лаборатория</button></li>
        <li><button onClick={() => scrollToSection('about')}>О нас</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Контакты</button></li>
      </ul>

      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>
    </nav>
  )
}

export default Navbar 