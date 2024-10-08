import LogoA248px from "@svgs/logos/48px/logoA248px.svg";
import LogoBelgo48px from "@svgs/logos/48px/logoBelgo48px.svg";
import LogoCacauShow48px from "@svgs/logos/48px/logoCacauShow48px.svg";
import LogoCopacabana48px from "@svgs/logos/48px/logoCopacabana48px.svg";
import LogoGiba48px from "@svgs/logos/48px/logoGiba48px.svg";
import LogoInService48px from "@svgs/logos/48px/logoInService48px.svg";
import LogoNatsumi48px from "@svgs/logos/48px/logoNatsumi48px.svg";
import LogoNestle48px from "@svgs/logos/48px/logoNestle48px.svg";
import LogoNovaExpress48px from "@svgs/logos/48px/logoNovaExpress48px.svg";
import LogoOdontoCompany48px from "@svgs/logos/48px/logoOdontoCompany48px.svg";
import LogoResolv48px from "@svgs/logos/48px/logoResolv48px.svg";
import LogoA232px from "@svgs/logos/32px/logoA232px.svg";
import LogoBelgo32px from "@svgs/logos/32px/logoBelgo32px.svg";
import LogoCacauShow32px from "@svgs/logos/32px/logoCacauShow32px.svg";
import LogoCopacabana32px from "@svgs/logos/32px/logoCopacabana32px.svg";
import LogoGiba32px from "@svgs/logos/32px/logoGiba32px.svg";
import LogoInService32px from "@svgs/logos/32px/logoInService32px.svg";
import LogoNatsumi32px from "@svgs/logos/32px/logoNatsumi32px.svg";
import LogoNestle32px from "@svgs/logos/32px/logoNestle32px.svg";
import LogoNovaExpress32px from "@svgs/logos/32px/logoNovaExpress32px.svg";
import LogoOdontoCompany32px from "@svgs/logos/32px/logoOdontoCompany32px.svg";
import LogoResolv32px from "@svgs/logos/32px/logoResolv32px.svg";
import React from "react";
import BaseHomeSection from "./BaseHomeSection";
import * as styles from "./clientsSection.module.css";
import { useMediaQuery } from "@mui/material";

const largeLogos = [
  <LogoNestle48px />,
  <LogoCacauShow48px />,
  <LogoOdontoCompany48px />,
  <LogoNovaExpress48px />,
  <LogoBelgo48px />,
  <LogoA248px />,
  <LogoNatsumi48px />,
  <LogoInService48px />,
  <LogoGiba48px />,
  <LogoCopacabana48px />,
  <LogoResolv48px />,
];

const smallLogos = [
  <LogoNestle32px />,
  <LogoCacauShow32px />,
  <LogoOdontoCompany32px />,
  <LogoNovaExpress32px />,
  <LogoBelgo32px />,
  <LogoA232px />,
  <LogoNatsumi32px />,
  <LogoInService32px />,
  <LogoGiba32px />,
  <LogoCopacabana32px />,
  <LogoResolv32px />,
];

const ClientsSection: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <BaseHomeSection id="clientsSection" title="Nossos clientes">
      <div className={styles.clientsLogos}>
        {isLargeScreen ? largeLogos : smallLogos}
      </div>
    </BaseHomeSection>
  );
};

export default ClientsSection;
