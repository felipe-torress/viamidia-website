import typography from "@styles/typography.module.css";
import classNames from "classnames";
import OpeningHoursSection from "./OpeningHoursSection";
import PagesSection from "./PagesSection";
import SafeWebsiteSection from "./SafeWebsiteSection";
import SocialMediaSection from "./SocialMediaSection";
import studio1001Image from "@vectors/studio1001.svg";
import styles from "./footer.module.css";

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
      <SafeWebsiteSection />
    </div>
  );
};

const BottomSection: React.FC = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.createdBy}>
        <p className={typography.caption}>Criado por</p>
        <img src={studio1001Image.src} width={80} />
      </div>
      <p className={classNames(typography.caption, typography.baseline)}>
        Via Midia Comunicação Visual - CNPJ 33.565.366/0001-67
      </p>
    </div>
  );
};
