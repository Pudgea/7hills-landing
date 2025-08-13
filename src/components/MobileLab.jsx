import React from 'react'

const MobileLab = ({ baseUrl }) => {
  return (
    <section id="mobile-lab" className="mobile-lab">
      <div className="mobile-lab-background">
        <video autoPlay muted loop playsInline>
          <source src={`${baseUrl}/assets/mission-bg.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <div className="container">
        <div className="mobile-lab-content">
          <div className="mobile-lab-text">
            <h2>Переносная цифровая криминалистическая лаборатория</h2>
            <p>Мобильное решение для проведения экспертиз на месте происшествия</p>
            
            <div className="mobile-lab-features">
              <div className="feature-item">
                <div className="feature-icon">🚐</div>
                <div className="feature-content">
                  <h3>Мобильность</h3>
                  <p>Полностью автономная лаборатория, готовая к работе в любых условиях</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h3>Быстрое развертывание</h3>
                  <p>Готовность к работе в течение 15 минут после прибытия на место</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🔬</div>
                <div className="feature-content">
                  <h3>Полный функционал</h3>
                  <p>Все возможности стационарной лаборатории в мобильном формате</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <div className="feature-content">
                  <h3>Безопасность данных</h3>
                  <p>Защищенная передача и обработка конфиденциальной информации</p>
                </div>
              </div>
            </div>
            
            <div className="mobile-lab-stats">
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Готовность к выезду</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">минут на развертывание</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">автономность</span>
              </div>
            </div>
          </div>
          
          <div className="mobile-lab-visual">
            <div className="lab-preview">
              <h3>Комплектация</h3>
              <ul className="lab-equipment">
                <li>Портативные устройства извлечения данных</li>
                <li>Аналитические станции</li>
                <li>Системы резервного копирования</li>
                <li>Средства защиты информации</li>
                <li>Коммуникационное оборудование</li>
                <li>Источники бесперебойного питания</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Presentation Video Section */}
        <div className="presentation-video-section">
          <div className="video-container">
            <h3>Презентация переносной лаборатории</h3>
            <div className="video-wrapper">
              <video controls>
                <source src={`${baseUrl}/assets/7HI - 1 Presentation.MOV`} type="video/quicktime" />
                <source src={`${baseUrl}/assets/7HI - 1 Presentation.MOV`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="video-description">
              Демонстрация возможностей и комплектации переносной цифровой криминалистической лаборатории
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileLab 