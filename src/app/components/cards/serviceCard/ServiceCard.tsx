import * as typography from "@styles/typography.module.css";
import React from "react";
import * as styles from "./serviceCard.module.css";

interface ServiceCardProps {
  Text: React.FC;
  title: string;
  imageSrc: string;
  contentDescription: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  Text,
  title,
  imageSrc,
  contentDescription,
}) => {
  return (
    <article className={styles.cardContainer}>
      <img src={imageSrc} alt={contentDescription} height={200} width={400} />
      <div className={styles.cardTextContainer}>
        <h3 className={typography.subHeader1}>{title}</h3>
        <Text />
      </div>
    </article>
  );
};

export default ServiceCard;
