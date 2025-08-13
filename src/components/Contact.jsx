import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Пожалуйста, заполните все обязательные поля')
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Свяжитесь с нами</h2>
            <p>Готовы предоставить профессиональную консультацию и подобрать оптимальное решение для ваших задач</p>
            <div className="contact-details">
              <p><strong>Телефон:</strong> +7 (777) 123-45-67</p>
              <p><strong>Email:</strong> info@7hills.kz</p>
              <p><strong>Адрес:</strong> г. Астана, ул. Примерная, 123</p>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ваше имя"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+7 (777) 123-45-67"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Организация</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Название организации"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Расскажите о ваших задачах и требованиях"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправляется...' : 'Отправить заявку'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 