import React from "react";
import Logo from "../Logo";
import NavItems from "./components/NavItems";

import { LogoContainer, NavbarContainer } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
