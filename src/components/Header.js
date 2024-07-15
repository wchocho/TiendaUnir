import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Tienda Online</h1>
      <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;
