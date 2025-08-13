import React from 'react'

const Advantages = () => {
  const advantages = [
    {
      icon: '🔧',
      title: 'Специализированное оборудование',
      description: 'Цифровая криминалистическая экспертиза с гарантией от лучших мировых производителей'
    },
    {
      icon: '💻',
      title: 'ПО от мировых лидеров',
      description: 'Программное обеспечение от лучших разработчиков, включая эксклюзивные договоры'
    },
    {
      icon: '🏆',
      title: 'Уникальные отечественные решения',
      description: 'Собственные программные разработки, адаптированные под местные требования'
    },
    {
      icon: '🎓',
      title: 'Бесплатное обучение',
      description: 'Комплексное обучение по работе с оборудованием и ПО для 5 сотрудников'
    },
    {
      icon: '🔨',
      title: 'Сервис и модернизация',
      description: 'Полный цикл технического обслуживания, ремонта и модернизации оборудования'
    },
    {
      icon: '📞',
      title: 'Техническая поддержка 24/7',
      description: 'Круглосуточная техническая поддержка и консультации специалистов'
    },
    {
      icon: '🏢',
      title: 'Лаборатория "под ключ"',
      description: 'Организация цифровой криминалистической лаборатории с полным циклом услуг'
    },
    {
      icon: '🔬',
      title: 'Независимая лаборатория',
      description: 'Услуги независимой цифровой криминалистической лаборатории'
    },
    {
      icon: '⭐',
      title: 'Эксклюзивное дистрибьюторство',
      description: 'Являемся эксклюзивными дистрибьюторами на территории Республики Казахстан с сертификатами от производителей',
      featured: true
    }
  ]

  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <div className="section-header">
          <h2>Преимущества сотрудничества с Seven Hills Intelligence</h2>
          <p>Почему правоохранительные органы выбирают именно нас</p>
        </div>
        
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className={`advantage-card ${advantage.featured ? 'featured' : ''}`}
            >
              <div className="advantage-icon">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages 