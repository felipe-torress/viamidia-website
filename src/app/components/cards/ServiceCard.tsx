import React from "react";
import styles from "./serviceCard.module.css";
import Image from "next/image";
import typography from "@styles/typography.module.css";
import classNames from "classnames";

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
    <article
      className={classNames(styles.cardContainer)}
    >
      <Image
        src={imageSrc}
        alt={contentDescription}
        height={200}
        width={400}
        priority
      />
      <div className={classNames(styles.cardTextContainer)}>
        <h2 className={typography.subHeader1}>{title}</h2>
        <Text />
      </div>
    </article>
  );
};

export default ServiceCard;
