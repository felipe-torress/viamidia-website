import styles from "@styles/home.module.css";
import typography from "@styles/typography.module.css";
import Carousel from "@components/carousel/Carousel"
import classNames from "classnames";

export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.topText}>
        <h1 className={classNames(typography.h1, typography.centeredText)}>
          Você sonha,<br/> a gente<span className={classNames(typography.h1Meddon, typography.gradientText)}> faz</span>
        </h1>
      </div>

      <Carousel/>

      <div className={styles.clientsCarousel}></div>
    </main>
  );
}
