import typography from "@styles/typography.module.css";
import styles from "./footer.module.css";
import GoogleSafeBrowsing from "@vectors/GoogleSafeBrowsing.svg";

const SafeWebsiteSection: React.FC = () => {
  return (
    <div className={styles.safeWebsiteSection}>
      <p className={typography.subHeader2}>Site Seguro</p>
      <GoogleSafeBrowsing />
    </div>
  );
};

export default SafeWebsiteSection;
