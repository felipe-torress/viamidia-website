import CarouselWithIndicator from "@components/carousel/CarouselWithIndicator";
import GlowingText from "@components/texts/GlowingText";
import styles from "@styles/home.module.css";
import typography from "@styles/typography.module.css";
import classNames from "classnames";

export default function Home() {
  return (
    <main className={styles.home}>
      <GlowingText>
        <h1 className={classNames(typography.h1, typography.centeredText)}>
          Você sonha,
          <br />a gente
          <span
            className={classNames(typography.h1Meddon, typography.gradientText)}
          >
            {" "}
            faz
          </span>
        </h1>
      </GlowingText>

      <CarouselWithIndicator />
    </main>
  );
}
