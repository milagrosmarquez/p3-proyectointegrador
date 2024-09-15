import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <nav className="Navbar">
      <ul className="logo">
        <li><img src="./img/user.jpg" alt="Logo" /> </li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Header;