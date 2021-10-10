import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../responsives";
import BurgerMenuStyles from "../../menuStyles";

import { ListContainer, NavItem } from "./styles";

const NavItems = () => {
  const isMobile = useMediaQuery({ maxDeviceWidth: SCREENS.sm });

  if (isMobile) {
    return (
      <Menu right styles={BurgerMenuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="#">HOME</a>
          </NavItem>
          <NavItem menu>
            <a href="#">VEHICLES</a>
          </NavItem>
          <NavItem menu>
            <a href="#">SERVICES</a>
          </NavItem>
          <NavItem menu>
            <a href="#">CONTACT US</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );
  } else {
    return (
      <ListContainer>
        <NavItem>
          <a href="#">HOME</a>
        </NavItem>
        <NavItem>
          <a href="#">VEHICLES</a>
        </NavItem>
        <NavItem>
          <a href="#">SERVICES</a>
        </NavItem>
        <NavItem>
          <a href="#">CONTACT US</a>
        </NavItem>
      </ListContainer>
    );
  }
};

export default NavItems;
