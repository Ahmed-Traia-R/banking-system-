import React from 'react';
import { FaFacebook, FaTwitter, FaSnapchat, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const getYr = () => {
    const options = {
      year: 'numeric',
    };
    return new Date().toLocaleString('en-FR', options);
  };
  return (
    <footer className="footer">
      <div>
        NEED HELP ?
        <h4>Contact us</h4>
        <p>Telephone: 123-123-1234</p>
        <p>Email: RBKbank@email.com</p>
      </div>
      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaSnapchat /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <div>
        <h4>Address</h4>
        <p>RBK, Bloc B24, Elgazala Technopark, 2088 Ariana – Tunisie.,</p>
        <p> Raoued, Gouvernorat de l’Ariana,</p>
        <p>2088 Ariana – Tunisie.,</p>
      </div>
      <p className="copy">&copy; {getYr()} RBK Bank. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
