import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [animatedStats, setAnimatedStats] = useState({
    records: 0,
    support: '24/7',
    accuracy: 0,
    integrations: 0
  })

  useEffect(() => {
    const animateStats = () => {
      const targets = { records: 10, accuracy: 99, integrations: 50 }
      
      Object.keys(targets).forEach(key => {
        let current = 0
        const target = targets[key]
        const increment = target / 50
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }))
        }, 50)
      })
    }

    const timer = setTimeout(animateStats, 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Передовые OSINT решения для правоохранительных органов</h1>
          <p>Обеспечение правоохранительных и специальных органов современными и прогрессивными аппаратно-программными комплексами для решения оперативных задач</p>
          <button onClick={scrollToContact} className="cta-button">
            Получить консультацию
          </button>
        </div>
        
        <div className="hero-visual">
          <div className="hero-card">
            <h3>Миллиарды записей</h3>
            <p>Постоянно растущий репозиторий данных для расследований</p>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{animatedStats.records}+</span>
                <span className="stat-label">млрд записей</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{animatedStats.support}</span>
                <span className="stat-label">поддержка</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{animatedStats.accuracy}%</span>
                <span className="stat-label">точность</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{animatedStats.integrations}+</span>
                <span className="stat-label">интеграций</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator"></div>
    </section>
  )
}

export default Hero 