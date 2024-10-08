import * as typography from "@styles/typography.module.css";
import Studio1001 from "@svgs/studio1001.svg";
import * as styles from "./footer.module.css";
import FooterContactSection from "./FooterContactSection";
import PagesSection from "./PagesSection";
import SafeWebsiteSection from "./SafeWebsiteSection";
import SocialMediaSection from "./SocialMediaSection";

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
      <FooterContactSection />
      <SafeWebsiteSection />
    </div>
  );
};

const BottomSection: React.FC = () => {
  return (
    <div className={styles.bottomSection}>
      <div className={styles.createdBy}>
        <p className={typography.caption}>Criado por</p>
        <Studio1001 />
      </div>
      <p className={typography.caption}>
        Via Midia Comunicação Visual - CNPJ 33.565.366/0001-67
      </p>
    </div>
  );
};
