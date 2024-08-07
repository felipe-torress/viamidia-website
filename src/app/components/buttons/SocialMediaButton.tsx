import Link from "next/link";
import styles from "./socialMediaButton.module.css";

interface SocialMediaButtonProps {
  href: string;
  children: React.ReactNode;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  href,
  children,
}) => {
  return (
    <Link className={styles.socialMediaButton} href={href} target="_blank">
      {children}
    </Link>
  );
};

export default SocialMediaButton;
