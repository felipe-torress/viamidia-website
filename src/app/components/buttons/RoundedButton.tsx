import React from "react";
import * as styles from "./roundedButton.module.css";
import * as typography from "@styles/typography.module.css";
import colors from "@colors/colors";

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
    <a
      className={styles.roundedButton}
      href={href}
      style={containerStyle}
      target="_blank"
    >
      <Icon style={iconStyle} />
      <p className={typography.button} style={{ ...textStyle }}>
        {text}
      </p>
    </a>
  );
};

export default RoundedButton;
