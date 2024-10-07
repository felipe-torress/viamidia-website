import * as styles from "./socialMediaButton.module.css";

interface SocialMediaButtonProps {
  href: string;
  children: React.ReactNode;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  href,
  children,
}) => {
  return (
    <a className={styles.socialMediaButton} href={href} target="_blank">
      {children}
    </a>
  );
};

export default SocialMediaButton;
