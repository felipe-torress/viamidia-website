import colors from "@colors/colors";
import constants from "@utils/constants";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import RoundedButton from "./RoundedButton";

const InstagramButton: React.FC = () => {
  return (
    <RoundedButton
      text="Instagram"
      background="linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)"
      textColor={colors.white}
      iconColor={colors.white}
      icon={FaInstagram}
      href={constants.instagramUrl}
    />
  );
};

export default InstagramButton;
