import * as styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src={"/images/Logo-ViaMidia.png"} alt="Logo"/>
      </a>
    </div>
  );
};

export default Logo;