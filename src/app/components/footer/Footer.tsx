import OpeningHoursSection from "./OpeningHoursSection";
import PagesSection from "./PagesSection";
import SocialMediaSection from "./SocialMediaSection";
import styles from "./footer.module.css";
import typography from "@styles/typography.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <TopSection />
      <BottomSection />
    </footer>
  );
};

export default Footer;

const TopSection: React.FC = () => {
  return (
    <div className={styles.topSection}>
      <SocialMediaSection />
      <PagesSection />
      <OpeningHoursSection />
    </div>
  );
};

const BottomSection: React.FC = () => {
  return (
    <div className={styles.bottomSection}>
      <p className={typography.caption}>Criado por Studio 1001</p>
      <p className={typography.caption}>
        Via Midia Comunicação Visual - CNPJ 33.565.366/0001-67
      </p>
    </div>
  );
};
