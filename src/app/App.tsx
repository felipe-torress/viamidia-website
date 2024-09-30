import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/home/Home";
import { NavbarContext } from "@components/navbar/NavbarContext";
import Navbar from "@components/navbar/Navbar";
import Footer from "@components/footer/Footer";

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
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </NavbarContext.Provider>
  );
};
