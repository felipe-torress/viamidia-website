import CarouselWithIndicator from "@components/carousel/CarouselWithIndicator";
import GlowingText from "@components/texts/GlowingText";
import styles from "@styles/home.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";
import ContactUsSection from "@/app/home/ContactUsSection";
import ProductsSection from "./home/ProductsSection";

export default function Home() {
  return (
    <main className={styles.home}>
      <GlowingText>
        <h1 className={classNames(typography.superHeader, typography.centeredText)}>
          Você sonha,
          <br />a gente
          <span
            className={classNames(
              typography.superHeaderMeddon,
              typography.linearGradientText
            )}
          >
            {" "}
            faz
          </span>
        </h1>
      </GlowingText>

      <CarouselWithIndicator />

      <ProductsSection />

      <ContactUsSection />
    </main>
  );
}
