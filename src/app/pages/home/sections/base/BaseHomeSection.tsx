import * as typography from "@styles/typography.module.css";
import classNames from "classnames";
import React from "react";
import * as styles from "./baseHomeSection.module.css";

interface BaseHomeSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const BaseHomeSection: React.FC<BaseHomeSectionProps> = ({
  id,
  title,
  children,
}) => {
  return (
    <section id={id} className={styles.baseHomeSection}>
      <h2
        className={classNames(
          typography.header2,
          typography.radialGradientText
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
};

export default BaseHomeSection;
