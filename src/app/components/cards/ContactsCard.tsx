import typography from "@styles/typography.module.css";
import colors from "@styles/colors.module.css";
import React from "react";
import InstagramButton from "../buttons/InstagramButton";
import WazeButton from "../buttons/WazeButton";
import WhatsAppButton from "../buttons/WhatsappButton";
import PhoneNumber from "../texts/PhoneNumber";
import styles from "./contactsCard.module.css";
import classNames from "classnames";

const ContactsCard: React.FC = () => {
  return (
    <div className={styles.contactsCardContainer}>
      <p className={typography.bodyLarge}>
        Solicite um{" "}
        <strong className={classNames(colors.electricPink)}>orçamento</strong>{" "}
        para que possamos transformar sua marca também
      </p>
      <div className={classNames(styles.contactsCardButtons)}>
        <PhoneNumber
          text="(16) 99406-5410"
          phoneNumberComplete="+5516994065410"
        />
        <WhatsAppButton />
        <InstagramButton />
        <WazeButton />
      </div>
    </div>
  );
};

export default ContactsCard;
