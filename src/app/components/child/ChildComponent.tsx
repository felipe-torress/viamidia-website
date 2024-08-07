"use client";

import React from "react";
import { useNavbarContext } from "../navbar/NavbarContext";

interface ChildComponentProps {
  children: React.ReactNode;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ children }) => {
  const { navbarHeight, setNavbarHeight } = useNavbarContext();

  return <div style={{ paddingTop: navbarHeight }}>{children}</div>;
};

export default ChildComponent;
