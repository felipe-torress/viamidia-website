import colors from "@colors/colors";
import constants from "@utils/constants";
import React from "react";
import { FaWaze } from "react-icons/fa";
import RoundedButton from "./RoundedButton";

const WazeButton: React.FC = () => {
  return (
    <RoundedButton
      text="Waze"
      backgroundColor={colors.wazePrimary}
      textColor={colors.white}
      iconColor={colors.black}
      icon={FaWaze}
      href={constants.wazeUrl}
    />
  );
};

export default WazeButton;
