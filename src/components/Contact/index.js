import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import what from "./whatsapp-svgrepo-com (1).svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = '8870772095';
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappURL,'_blank');
  };

  const handleEmailClick = () => {
    const emailAddress = 'alinjoe98@gmail.com';
    const emailSubject = 'Inquiry';
    const mailtoURL = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`;
    window.open(mailtoURL, '_blank');
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in new job opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using the form below.
          </p>
          <a href="https://api.whatsapp.com/send?phone=8870772095" onClick={handleWhatsAppClick}>
            <img className="wt" src={what} alt="WhatsApp" />
            <p className="number">8870772095</p>
          </a>
          <p className="emails">
            <FontAwesomeIcon className='icon' icon={faEnvelope } />
            <a href="mailto:alinjoe98@gmail.com" onClick={handleEmailClick} target="_blank"style={{ textDecoration: 'none' }} >
            <span><p className='email'>alinjoe98@gmail.com</p> </span>
            </a>
          </p>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
