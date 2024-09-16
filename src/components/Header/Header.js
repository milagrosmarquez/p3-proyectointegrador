import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li><img className="logo" src="./img/Logometflix.png" alt="Logo" /> </li>
      </ul>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
      </ul>
    </nav>
  );
};

export default Header;