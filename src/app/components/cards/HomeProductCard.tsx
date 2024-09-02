import React from "react";
import styles from "./homeProductCard.module.css";
import Image from "next/image";
import typography from "@styles/typography.module.css";
import classNames from "classnames";

interface HomeProductCardProps {
  title: string;
  text: string;
  imageSrc: string;
  contentDescription: string;
  isTextLeftAligned: boolean;
}

const HomeProductCard: React.FC<HomeProductCardProps> = ({
  title,
  text,
  imageSrc,
  contentDescription,
  isTextLeftAligned,
}) => {
  const containerAlignmentClassName = isTextLeftAligned
    ? styles.textLeft
    : styles.textRight;

  return (
    <article
      className={classNames(styles.cardContainer, containerAlignmentClassName)}
    >
      <div className={classNames(styles.cardTextContainer)}>
        <h2 className={typography.h3}>{title}</h2>
        <p className={typography.bodyLarge}>{text}</p>
      </div>
      <Image src={imageSrc} alt={contentDescription} height={400} width={300} priority />
    </article>
  );
};

export default HomeProductCard;
