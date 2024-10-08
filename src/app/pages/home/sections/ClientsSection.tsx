import LogoA2 from "@svgs/logos/logoA2.svg";
import LogoBelgo from "@svgs/logos/logoBelgo.svg";
import LogoCacauShow from "@svgs/logos/logoCacauShow.svg";
import LogoCopacabana from "@svgs/logos/logoCopacabana.svg";
import LogoGiba from "@svgs/logos/logoGiba.svg";
import LogoInService from "@svgs/logos/logoInService.svg";
import LogoNatsumi from "@svgs/logos/logoNatsumi.svg";
import LogoNestle from "@svgs/logos/logoNestle.svg";
import LogoNovaExpress from "@svgs/logos/logoNovaExpress.svg";
import LogoOdontoCompany from "@svgs/logos/logoOdontoCompany.svg";
import LogoResolv from "@svgs/logos/logoResolv.svg";
import React from "react";
import BaseHomeSection from "./BaseHomeSection";
import * as styles from "./clientsSection.module.css";

const ClientsSection: React.FC = () => {
  return (
    <BaseHomeSection id="clientsSection" title="Nossos clientes">
      <div className={styles.clientsLogos}>
        <LogoNestle />
        <LogoCacauShow />
        <LogoOdontoCompany />
        <LogoNovaExpress />
        <LogoBelgo />
        <LogoA2 />
        <LogoNatsumi />
        <LogoInService />
        <LogoGiba />
        <LogoCopacabana />
        <LogoResolv />
      </div>
    </BaseHomeSection>
  );
};

export default ClientsSection;
