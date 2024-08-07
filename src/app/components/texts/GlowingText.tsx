import styles from "./glowingText.module.css";

interface GlowingTextProps {
  children: React.ReactNode;
}

const GlowingText: React.FC<GlowingTextProps> = ({ children }) => {
  return <div className={styles.glowingText}>{children}</div>;
};

export default GlowingText;
