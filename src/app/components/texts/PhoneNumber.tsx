"use client";

import React, { useState } from "react";
import styles from "./phoneNumber.module.css";
import PhoneIcon from "@components/svgs/PhoneIcon.svg";
import typography from "@styles/typography.module.css";

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
      <p className={typography.bodyLarge}>{text}</p>
    </a>
  );
};

export default PhoneNumber;
