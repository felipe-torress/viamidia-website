import React from "react";
import styles from "./roundedButton.module.css";
import typography from "@styles/typography.module.css";
import Link from "next/link";
import colors from "@colors/colors";
import constants from "@utils/contants";

interface RoundedButtonProps {
  text: string;
  href: string;
  textColor: string;
  iconColor: string;
  backgroundColor?: string;
  background?: string;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  href,
  textColor,
  iconColor,
  icon: Icon,
  backgroundColor = colors.black,
  background,
}) => {
  const containerStyle: React.CSSProperties =
    background != undefined
      ? { background: background }
      : { backgroundColor: backgroundColor };

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
      <p className={typography.bodyLarge} style={{...textStyle}}>
        {text}
      </p>
    </Link>
  );
};

export default RoundedButton;
