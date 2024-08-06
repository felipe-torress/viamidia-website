import typography from "@styles/typography.module.css";
import Logo from "../logo/Logo";
import styles from "./footer.module.css";
import SocialMediaSection from "./SocialMediaSection";

const Footer: React.FC = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.topSection}>
        <SocialMediaSection />
      </div>
      <div className={styles.bottomSection}>
        <p>Test</p>
        <p>Test 2</p>
      </div>
    </footer>
  );
};

export default Footer;
