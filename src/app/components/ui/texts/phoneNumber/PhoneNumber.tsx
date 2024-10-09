import * as typography from "@styles/typography.module.css";
import PhoneIcon from "@svgs/phoneIcon.svg";
import React from "react";
import * as styles from "./phoneNumber.module.css";

interface PhoneNumberProps {
  text: string;
  phoneNumberComplete: string;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({
  text,
  phoneNumberComplete,
}) => {
  return (
    <a
      className={styles.phoneNumber}
      href={`tel:${phoneNumberComplete}`}
      aria-label={`Ligue para ${text}`}
    >
      <PhoneIcon />
      <p className={typography.button}>{text}</p>
    </a>
  );
};

export default PhoneNumber;
