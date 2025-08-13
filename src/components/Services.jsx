import React from 'react'

const Services = () => {
  const services = [
    {
      icon: '🔍',
      title: 'OSINT Платформа',
      description: 'Собственная система открытых источников разведки с возможностью поиска по базам данных и распознавания лиц',
      features: [
        'Поиск людей по базам данных',
        'Распознавание лиц',
        'Анализ социальных сетей',
        'Геолокационный анализ'
      ]
    },
    {
      icon: '🔬',
      title: 'Цифровая криминалистика',
      description: 'Полный цикл услуг цифровой криминалистической лаборатории с современным оборудованием',
      features: [
        'Извлечение данных с устройств',
        'Анализ биллинговой информации',
        'Восстановление удаленных файлов',
        'Экспертные заключения'
      ]
    },
    {
      icon: '🛡️',
      title: 'Поставка оборудования',
      description: 'Авторизованное представительство ведущих мировых производителей аппаратно-программных комплексов',
      features: [
        'Консультации по выбору',
        'Поставка и настройка',
        'Техническая поддержка',
        'Обучение персонала'
      ]
    },
    {
      icon: '🎓',
      title: 'Обучение и консалтинг',
      description: 'Профессиональное обучение по извлечению и анализу данных из электронных устройств',
      features: [
        'Курсы по цифровой криминалистике',
        'OSINT методики',
        'Сертификация специалистов',
        'Консультационная поддержка'
      ]
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Наши решения</h2>
          <p>Комплексные решения для цифровой криминалистики и OSINT исследований</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 