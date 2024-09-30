import LogoA2 from '@svgs/logos/logoA2.svg';
import LogoBelgo from '@svgs/logos/logoBelgo.svg';
import LogoCacauShow from '@svgs/logos/logoCacauShow.svg';
import LogoCopacabana from '@svgs/logos/logoCopacabana.svg';
import LogoGiba from '@svgs/logos/logoGiba.svg';
import LogoInService from '@svgs/logos/logoInService.svg';
import LogoNatsumi from '@svgs/logos/logoNatsumi.svg';
import LogoNestle from '@svgs/logos/logoNestle.svg';
import LogoNovaExpress from '@svgs/logos/logoNovaExpress.svg';
import LogoOdontoCompany from '@svgs/logos/logoOdontoCompany.svg';
import LogoResolv from '@svgs/logos/logoResolv.svg';
import * as typography from "@styles/typography.module.css";
import classNames from "classnames";
import React from "react";
import * as styles from "./clientsSection.module.css";

const ClientsSection: React.FC = () => {
  return (
    <section id="clientsSection" className={styles.clientsSection}>
      <h2
        className={classNames(
          typography.header2,
          typography.radialGradientText
        )}
      >
        Nossos clientes
      </h2>
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
    </section>
  );
};

export default ClientsSection;
