import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './styles/footer.scss';

const Footer = () => {
  return (
    <section id='footer'>
        <footer className='container'>
          <div className="icons-container">
            <a className="icon-wrapper" href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} className='icon' /></a>
            <a className="icon-wrapper" href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} className='icon' /></a>
            <a className="icon-wrapper" href="https://www.instagram,.com"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
            <a className="icon-wrapper" href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} className='icon' /></a>
            <a className="icon-wrapper" href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} className='icon' /></a>
          </div>
          <p className="copyright">&copy; Unimarket Private Limited, {new Date().getFullYear()}.</p> 
          <div className='terms-wrapper d-flex flex-row justify-content-center'>
            <Link to='' className='terms'>Terms and Conditions </Link>
            <span className='mx-2'> | </span>
            <Link to='' className='terms'> Privacy Policy </Link>
          </div>
        </footer>
    </section>
  )
}

export default Footer