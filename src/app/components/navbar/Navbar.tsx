"use client";

import React, { useEffect, useRef } from "react";
import Logo from "@components/logo/Logo";
import { useNavbarContext } from "./NavbarContext";
import styles from "./navbar.module.css";
import Link from "next/link";

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
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/sobre-nos/">Sobre Nós</Link>
        </li>
        <li>
          <Link href="/servicos/">Serviços</Link>
        </li>
        <li>
          <Link href="/cases/">Cases</Link>
        </li>
        <li>
          <Link href="/contato/">Contato</Link>
        </li>
        <li>
          <Link href="/orcamento/" className={styles.navbarLinkButton}>
            Orçamento
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
