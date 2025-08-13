import React from 'react'

const Partners = () => {
  const partners = [
    '/assets/partners/1.png',
    '/assets/partners/2.png',
    '/assets/partners/3.png',
    '/assets/partners/4.png',
    '/assets/partners/5.png',
    '/assets/partners/6.png',
    '/assets/partners/7.png',
    '/assets/partners/8.png'
  ]

  return (
    <section id="partners" className="timeline">
      <div className="container">
        <div className="section-header">
          <h2>Наши партнеры</h2>
          <p>Мы активно сотрудничаем с мировыми лидерами в этой сфере, объединяя наши знания и опыт для разработки инновационных технологий.</p>
        </div>
        
        <div className="partners-container">
          {partners.map((partner, index) => (
            <img 
              key={index} 
              src={partner} 
              className="partner" 
              alt={`Partner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners 