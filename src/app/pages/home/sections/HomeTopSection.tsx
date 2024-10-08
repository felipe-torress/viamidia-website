import React from "react";
import * as styles from "./homeTopSection.module.css";
import GlowingText from "@/app/components/texts/GlowingText";
import ImagePager from "@/app/components/imagePager/ImagePager";
import classNames from "classnames";
import * as typography from "@styles/typography.module.css";

const HomeTopSection: React.FC = () => {
  return (
    <section className={classNames(styles.homeTopSection)}>
      <GlowingText>
        <h1 className={classNames(typography.header1, typography.centeredText)}>
          Você sonha,
          <br />a gente
          <span
            className={classNames(
              typography.header1Meddon,
              typography.linearGradientText
            )}
          >
            {" "}
            faz
          </span>
        </h1>
      </GlowingText>
      <ImagePager />
    </section>
  );
};

export default HomeTopSection;
