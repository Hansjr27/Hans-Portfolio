import React from 'react'
import './ContactMeCard.css'

const ContactMeCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
        </div>

        <a href="https://github.com/Hansjr27" target='blank'><p>{text}</p></a>
    </div>
  )
}

export default ContactMeCard