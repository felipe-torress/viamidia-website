import React from "react";
import * as styles from "./footer.module.css";
import ContactField from "./ContactField";
import { FaWhatsapp } from "react-icons/fa";
import { IconEmail16px, IconLocation16px } from "@components/svgs";

const FooterContactSection: React.FC = () => {
  return (
    <div className={styles.contactSection}>
      <ContactField
        Icon={FaWhatsapp}
        title="(16) 3635-0101:"
        description="Segunda a Sexta das 9:00 às 18:00"
      />
      <ContactField
        Icon={IconEmail16px}
        title="Email:"
        description="viamidiarp@gmail.com"
      />
      <ContactField
        Icon={IconLocation16px}
        title="Endereço:"
        description="Av. Dr. Francisco Junqueira, 990 - Centro, Ribeirão Preto"
      />
    </div>
  );
};

export default FooterContactSection;
