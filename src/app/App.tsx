import Footer from "@components/layout/footer/Footer";
import Navbar from "@components/layout/navbar/Navbar";
import {
  NavbarContext,
  useNavbarContext,
} from "@components/layout/navbar/NavbarContext";
import Home from "@pages/home/Home";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState<number>(140);

  return (
    <NavbarContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      <div className="screenContent">
        <Navbar />
        <ChildComponent>{children}</ChildComponent>
        <Footer />
      </div>
    </NavbarContext.Provider>
  );
};

interface ChildComponentProps {
  children: React.ReactNode;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ children }) => {
  const { navbarHeight } = useNavbarContext();

  return <div style={{ paddingTop: navbarHeight }}>{children}</div>;
};
