"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../Logo";
import { useNavbarContext } from "./NavbarContext";
import "../styles/navbar.css";

// Define the Navbar component
const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { navbarHeight, setNavbarHeight } = useNavbarContext();

  useEffect(() => {
    if (navbarRef.current) {
      const navbarElement = navbarRef.current;
      const computedStyle = window.getComputedStyle(navbarElement);
      const marginTop = parseFloat(computedStyle.marginTop);
      const height = navbarElement.offsetHeight;

      setNavbarHeight(height + marginTop);
    }
  }, [navbarRef]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-logo">
        <Logo />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/sobre-nos">Sobre Nós</a>
        </li>
        <li>
          <a href="/servicos">Serviços</a>
        </li>
        <li>
          <a href="/cases">Cases</a>
        </li>
        <li>
          <a href="/contato">Contato</a>
        </li>
        <li>
          <a href="/orcamento" className="navbar-link-button">
            Orçamento
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
