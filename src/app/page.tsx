"use client";

import ContactUsSection from "@/app/home/ContactSection";
import GlowingText from "@components/texts/GlowingText";
import styles from "@styles/home.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";
import ImagePager from "./components/imagePager/ImagePager";
import ClientsSection from "./home/ClientsSection";
import ServicesSection from "./home/ServicesSection";

export default function Home() {
  return (
    <main className={styles.home}>
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

      <ServicesSection />

      <ClientsSection />

      <ContactUsSection />
    </main>
  );
}
