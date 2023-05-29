import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faAddressCard, faBlog, faEnvelope, faPersonChalkboard, faPlus, faQuestion, faRegistered } from '@fortawesome/free-solid-svg-icons';
import './styles/footer.scss';


const FooterTop = () => {
  return (
    <section id='footer-top'>
      <div className="footer-top-container">
        <div className="container">
          <div><strong>U<span>nimarket</span></strong></div>
          <p className="text text-2">Unimarket is a one stop platform to sell and buy all your used products at your comfort. This online exchange platform provides you ease of doing business within or around your college boundaries. All you need to do is Post your used products for exchange and you will find buyers in your campus only. You can also take the privilege of giving things for free.</p>
          <div className='footer-links-container mt-4'>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faAddressCard} /> About us</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faRegistered} /> Register</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faAddressBook} /> Contact</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faPlus} /> Post a Free Ad</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faQuestion} /> FAQs</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faPersonChalkboard} /> How it works</Link></div>
            <div className="link-wrapper"><Link to='' className="link"><FontAwesomeIcon icon={faBlog} />Blog</Link></div>
            <div className="link-wrapper"><a href='mailto:info@unimarket.com' className="link"><FontAwesomeIcon icon={faEnvelope} /> info@unimarket.com</a></div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default FooterTop
