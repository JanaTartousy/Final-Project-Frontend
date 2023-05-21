import React from 'react';
import ContactHero from '../../components/ContactHero/ContactHero.js';
import ContactForm from '../../components/ContactForm/ContactForm.js';
import './ContactPage.css';

function ContactPage() {
 

  return (
    <div className="contact-page-container">
      <ContactHero/>
    <ContactForm/>
    </div>
  );
}

export default ContactPage;
