import React from 'react';
import Logo from './Logo';
import './styles/navbar.css'


// Define the Navbar component
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo /> 
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/sobre-nos">Sobre Nós</a></li>
        <li><a href="/servicos">Serviços</a></li>
        <li><a href="/cases">Cases</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/orcamento">Orçamento</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;