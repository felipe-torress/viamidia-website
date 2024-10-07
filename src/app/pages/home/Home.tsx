import ContactUsSection from "@/app/pages/home/sections/ContactSection";
import ImagePager from "@components/imagePager/ImagePager";
import GlowingText from "@components/texts/GlowingText";
import * as typography from "@styles/typography.module.css";
import classNames from "classnames";
import * as styles from "./home.module.css";
import ClientsSection from "./sections/ClientsSection";
import ServicesSection from "./sections/ServicesSection";

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
