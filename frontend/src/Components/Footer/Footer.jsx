// import React from 'react'
// import './Footer.css'
// import footer_logo from '../Assets/logo.png';
// import instaIcon from '../Assets/instagram.png';
// import fbIcon from '../Assets/WhatsApp.svg';
// import twitterIcon from '../Assets/Pinterest-logo.png'; 

import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png';
import instagram_icon from '../Assets/instagram.png';
import pintester_icon from '../Assets/WhatsApp.svg';
import whatsapp_icon from '../Assets/Pinterest-logo.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p> Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer;