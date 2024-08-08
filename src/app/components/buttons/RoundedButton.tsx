import React from "react";
import styles from "./roundedButton.module.css";
import typography from "@styles/typography.module.css";
import Link from "next/link";

interface RoundedButtonProps {
  text: string;
  href: string;
  textColor: string;
  iconColor: string;
  backgroundColor: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  href,
  textColor,
  iconColor,
  backgroundColor,
  icon: Icon,
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
  };

  const iconStyle: React.CSSProperties = {
    color: iconColor,
  };

  const textStyle: React.CSSProperties = {
    color: textColor,
  };

  return (
    <Link
      className={styles.roundedButton}
      href={href}
      style={containerStyle}
      target="_blank"
    >
      <Icon style={iconStyle} />
      <p className={typography.bodyLarge} style={textStyle}>
        {text}
      </p>
    </Link>
  );
};

export default RoundedButton;
