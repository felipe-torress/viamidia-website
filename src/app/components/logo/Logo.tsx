import Link from "next/link";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <img src={"/images/Logo-ViaMidia.png"} alt="Logo"/>
      </Link>
    </div>
  );
};

export default Logo;