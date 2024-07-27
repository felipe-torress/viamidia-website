"use client";

import React, { useEffect, useRef } from "react";
import Logo from "@components/logo/Logo";
import { useNavbarContext } from "@components/navbar/NavbarContext";
import styles from "./navbar.module.css";

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
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles.navbarLogo}>
        <Logo />
      </div>
      <ul className={styles.navbarLinks}>
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
          <a href="/orcamento" className={styles.navbarLinkButton}>
            Orçamento
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
