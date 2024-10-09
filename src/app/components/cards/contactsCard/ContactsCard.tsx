import InstagramButton from "@components/buttons/InstagramButton";
import WazeButton from "@components/buttons/WazeButton";
import WhatsAppButton from "@components/buttons/WhatsappButton";
import PhoneNumber from "@/app/components/texts/phoneNumber/PhoneNumber";
import * as colors from "@styles/colors.module.css";
import * as typography from "@styles/typography.module.css";
import classNames from "classnames";
import React from "react";
import * as styles from "./contactsCard.module.css";

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
