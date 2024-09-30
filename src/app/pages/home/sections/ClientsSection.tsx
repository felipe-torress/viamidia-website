import {
    LogoA2,
    LogoBelgo,
    LogoCacauShow,
    LogoCopacabana,
    LogoGiba,
    LogoInService,
    LogoNatsumi,
    LogoNestle,
    LogoNovaExpress,
    LogoOdontoCompany,
    LogoResolv,
} from "@components/svgs";
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
