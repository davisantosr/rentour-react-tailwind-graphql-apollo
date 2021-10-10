import React from "react";

import scooterLogo from "../../../assets/images/scooter-logo.svg";
import scooterLogoWhite from "../../../assets/images/scooter-logo-white.svg";
import { LogoContainer, Image, LogoText } from "./styles";


interface ILogoProps {
  color?: "white" | "dark"
  colorLogo?: "default" | "white"
}

const Logo = (props: ILogoProps) => {

  const {color, colorLogo} = props

  return (
    <LogoContainer>
      <Image>
        <img src={colorLogo === "white" ? scooterLogoWhite : scooterLogo} alt="logo" />
      </Image>
      <LogoText color={color || "dark"}>Rentour.</LogoText>
    </LogoContainer>
  );
};

export default Logo;
