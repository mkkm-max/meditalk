import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
      <div className="footerLinks">
        <Link to="/about"> About </Link>
        <Link to="/features"> Features </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/register"> Register </Link>
      </div>
      <p className="disclaimer">
        Sample content for demonstration only. MediTalk does not give real medical advice.
      </p>
      <p>&copy; 2026 MediTalk. All rights reserved.</p>
    </div>
  );
};

export default Footer;
