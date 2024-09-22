"use client";

import React, { useEffect, useRef, useState } from "react";
import Logo from "@components/logo/Logo";
import { useNavbarContext } from "./NavbarContext";
import styles from "./navbar.module.css";
import Link from "next/link";
import constants from "@utils/contants";
import { useSpring, animated } from "react-spring";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { navbarHeight, setNavbarHeight } = useNavbarContext();
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Check if scrolling down
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar
      } else {
        setIsVisible(true); // Show navbar
      }

      lastScrollY = currentScrollY; // Update last scroll position
    }
  };

  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-50px)",
    config: { duration: 300 },
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <animated.nav
      style={{ ...animationProps }}
      className={styles.navbar}
      ref={navbarRef}
    >
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
    </animated.nav>
  );
};

export default Navbar;
