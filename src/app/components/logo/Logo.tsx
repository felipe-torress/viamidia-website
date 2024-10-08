import LogoViamidia from "@svgs/logoViamidia.svg";
import * as styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <LogoViamidia />
      </a>
    </div>
  );
};

export default Logo;
