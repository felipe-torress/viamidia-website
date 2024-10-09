import ContactsCard from "@/app/components/ui/cards/contactsCard/ContactsCard";
import React from "react";
import BaseHomeSection from "../base/BaseHomeSection";
import * as styles from "./contactSection.module.css";

const ContactUsSection: React.FC = () => {
  return (
    <BaseHomeSection id="contactSection" title="Solicite seu orçamento">
      <div className={styles.contactUsSectionContent}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7440.870061312296!2d-47.808124178602775!3d-21.17487060226556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bedc9833e3fb%3A0x4047f4f2d779ccbe!2sVia%20Midia!5e0!3m2!1sen!2sbr!4v1723005629088!5m2!1sen!2sbr"
            width="800"
            height="400"
            style={{ border: 1 }}
            loading="lazy"
          ></iframe>
        </div>
        <ContactsCard />
      </div>
    </BaseHomeSection>
  );
};

export default ContactUsSection;
