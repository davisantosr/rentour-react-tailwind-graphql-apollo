import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  min-height: 60px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    
    lg:pl-12
    lg:pr-12
    justify-between
  `}
`;

export const LogoContainer = styled.div`
  ${tw`
  `}
`;
