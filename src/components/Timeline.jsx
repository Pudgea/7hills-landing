import React from 'react'

const Timeline = () => {
  const timelineData = [
    {
      year: '2023',
      title: 'Основание и первые достижения',
      items: [
        'Авторизованное представительство ведущих мировых производителей на рынке Республики Казахстан',
        'Консультационное сопровождение по подбору, комплектованию и модернизации оборудования',
        'Запуск услуг поставки и технической поддержки',
        'Начало разработок в области поиска людей по базам данных и распознания лиц',
        'Разработка собственной OSINT системы',
        'Запуск цифровой криминалистической лаборатории'
      ]
    },
    {
      year: '2024',
      title: 'Расширение возможностей',
      items: [
        'Запуск обучения по извлечению и анализу данных из электронных устройств',
        'Разработка и реализация инструментов анализа биллинговой информации',
        'Разработка инструментов социальной инженерии',
        'Поставка АПК и ПО в области цифровой криминалистики'
      ]
    }
  ]

  return (
    <section id="about" className="timeline">
      <div className="container">
        <div className="section-header">
          <h2>Наша история</h2>
          <p>Путь развития и основные достижения компании</p>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline 