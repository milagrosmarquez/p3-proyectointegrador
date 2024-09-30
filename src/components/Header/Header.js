import { Link } from "react-router-dom";
import React from 'react';
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="./img/Logometflix.png" alt="Logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/Populares">Populares</Link></li>
        <li><Link to="/Cartelera">Cartelera</Link></li>
      </ul>
    </nav>
  );
};

export default Header;