import colors from "@colors/colors";
import constants from "@utils/contants";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import RoundedButton from "./RoundedButton";

const WhatsAppButton: React.FC = () => {
  return (
    <RoundedButton
      text="WhatsApp"
      backgroundColor={colors.whatsAppGreen}
      textColor={colors.white}
      iconColor={colors.white}
      icon={FaWhatsapp}
      href={constants.whatsappUrl}
    />
  );
};

export default WhatsAppButton;