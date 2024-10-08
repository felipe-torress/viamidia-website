import { useNavbarContext } from "@components/navbar/NavbarContext";
import React from "react";

interface ChildComponentProps {
  children: React.ReactNode;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ children }) => {
  const { navbarHeight } = useNavbarContext();

  return <div style={{ paddingTop: navbarHeight }}>{children}</div>;
};

export default ChildComponent;
