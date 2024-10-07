import * as styles from "./logo.module.css";
import LogoViamidia from "@svgs/logoViamidia.svg";

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
