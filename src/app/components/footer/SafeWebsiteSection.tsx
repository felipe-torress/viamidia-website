import typography from "@styles/typography.module.css";
import styles from "./footer.module.css";
import GoogleSafeBrowsingImage from "@vectors/GoogleSafeBrowsing.svg";

const SafeWebsiteSection: React.FC = () => {
  return (
    <div className={styles.safeWebsiteSection}>
      <p className={typography.subHeader2}>Site Seguro</p>
      <img src={GoogleSafeBrowsingImage.src} alt="Description of the image" />
    </div>
  );
};

export default SafeWebsiteSection;
