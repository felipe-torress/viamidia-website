"use client";

import React, { useEffect, useRef } from "react";
import Logo from "@components/logo/Logo";
import { useNavbarContext } from "./NavbarContext";
import styles from "./navbar.module.css";
import Link from "next/link";
import constants from "@utils/contants";

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
          <Link href="#servicesSection">Serviços</Link>
        </li>
        <li>
          <Link href="#casesSection">Clientes</Link>
        </li>
        <li>
          <Link href="#contactSection">Contato</Link>
        </li>
        <li>
          <Link
            href={constants.whatsappUrl}
            target="_blank"
            className={styles.navbarLinkButton}
          >
            Orçamento
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
