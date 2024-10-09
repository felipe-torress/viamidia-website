import * as typography from "@styles/typography.module.css";
import Studio1001 from "@svgs/studio1001.svg";
import * as styles from "./footer.module.css";
import FooterContactSection from "./sections/contact/FooterContactSection";
import PagesSection from "./sections/pages/PagesSection";
import SafeWebsiteSection from "./sections/safeBrowsing/SafeWebsiteSection";
import SocialMediaSection from "./sections/socialMedia/SocialMediaSection";
import { useMediaQuery } from "@mui/material";

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
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  return (
    <div className={styles.bottomSection}>
      <div className={styles.createdBy}>
        <p className={typography.caption}>Criado por</p>
        <Studio1001 />
      </div>
      {isLargeScreen ? (
        <p className={typography.caption}>
          Via Midia Comunicação Visual • CNPJ 33.565.366/0001-67
        </p>
      ) : (
        <p className={typography.caption}>
          Via Midia Comunicação Visual
          <br />
          CNPJ 33.565.366/0001-67
        </p>
      )}
    </div>
  );
};
