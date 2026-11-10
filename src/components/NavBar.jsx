import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

const NavBar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <Link to="/" className="brand">
        <img src={logo} alt="MediTalk logo" />
        <span>MediTalk</span>
      </Link>

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/doctors"> Doctors </Link>
        <Link to="/studies"> Studies </Link>
        <Link to="/discussions"> Discussions </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/register"> Register </Link>
      </div>

      <button className="menuBtn" onClick={toggleNavbar}>
        <ReorderIcon />
      </button>

      <div className={openLinks ? 'mobileLinks show' : 'mobileLinks'} onClick={toggleNavbar}>
        <Link to="/"> Home </Link>
        <Link to="/doctors"> Doctors </Link>
        <Link to="/studies"> Studies </Link>
        <Link to="/discussions"> Discussions </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/register"> Register </Link>
      </div>
    </div>
  );
};

export default NavBar;
