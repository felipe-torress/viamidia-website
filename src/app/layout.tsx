"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import ChildComponent from "./components/child/ChildComponent";
import Navbar from "./components/navbar/Navbar";
import { NavbarContext } from "./components/navbar/NavbarContext";
import "./globals.css";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ChildComponent>{children}</ChildComponent>
        <Footer />
      </body>
    </html>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navbarHeight, setNavbarHeight] = useState<number>(140);

  return (
    <NavbarContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      <BaseLayout>{children}</BaseLayout>
    </NavbarContext.Provider>
  );
}
