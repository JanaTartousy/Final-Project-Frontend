import React from 'react';
import './Footer.css';
import Logo from '../../images/dalili-logo.png';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaGithub} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <div className='logo'> 
          <img src={Logo} alt="Dalili-logo" />
      </div> */}

      <div className='footer-links'>
        <a href="https://instagram.com/jana_tartousy?igshid=MmJiY2I4NDBkZg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/jana.tartousy?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://api.whatsapp.com/send?phone=+96176485271" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/in/jana-tartousy" target="_blank" rel="noopener noreferrer">
          <FaLinkedin/>
        </a>
        <a href="https://github.com/JanaTartousy" target="_blank" rel="noopener noreferrer">
          <FaGithub/>
        </a>
      </div>
      {/* <div className='footer-text'>
      <p>&copy; 2023 Created by Jana Tartousy</p>
      </div> */}
    </div>
  );
}

export default Footer;