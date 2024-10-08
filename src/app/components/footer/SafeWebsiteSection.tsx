import * as typography from "@styles/typography.module.css";
import GoogleSafeBrowsing from "@svgs/googleSafeBrowsing.svg";
import * as styles from "./footer.module.css";

const SafeWebsiteSection: React.FC = () => {
  return (
    <div className={styles.safeWebsiteSection}>
      <p className={typography.subHeader2}>Site Seguro</p>
      <GoogleSafeBrowsing />
    </div>
  );
};

export default SafeWebsiteSection;
