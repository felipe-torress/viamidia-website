import Logo from "@/app/components/ui/logo/Logo";
import constants from "@utils/constants";
import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";
import { useNavbarContext } from "./NavbarContext";
import * as styles from "./navbar.module.css";
import { useMediaQuery } from "@mui/material";

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null);
  const { setNavbarHeight } = useNavbarContext();
  const [isVisible, setIsVisible] = useState(true);
  const isLargeScreen = useMediaQuery("(min-width:768px)");
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
      <Logo />
      {isLargeScreen && (
        <ul className={styles.navbarLinks}>
          <li>
            <a href="#servicesSection">Serviços</a>
          </li>
          <li>
            <a href="#clientsSection">Clientes</a>
          </li>
          <li>
            <a href="#contactSection">Contato</a>
          </li>
          <li>
            <a
              href={constants.whatsappUrl}
              target="_blank"
              className={styles.navbarLinkButton}
            >
              Orçamento
            </a>
          </li>
        </ul>
      )}
    </animated.nav>
  );
};

export default Navbar;
