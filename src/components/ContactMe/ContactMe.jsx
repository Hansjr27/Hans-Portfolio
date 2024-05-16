import React from 'react'
import './ContactMe.css'
import ContactMeInfoCard from './ContactMeCard/ContactMeCard'
import ContactForm from './ContactForm/ContactForm'


const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactMeInfoCard
            iconUrl="../../src/assets/img/mail-line.svg"
            text="nakihansjr@gmail.com"
          />
          <ContactMeInfoCard
            iconUrl="../../src/assets/img/github-fill.svg"
            text="nakihansjr@gmail.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactMe