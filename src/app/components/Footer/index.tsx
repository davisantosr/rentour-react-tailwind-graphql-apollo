import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Logo";

import {
  AboutContainer,
  AboutText,
  BottomContainer,
  CopyrightText,
  FooterContainer,
  HeaderTitle,
  HorizontalContainer,
  InnerContainer,
  LinksList,
  ListItem,
  RedIcon,
  SectionContainer,
  SmallText,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo colorLogo={"white"} color="white" />
          <AboutText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            ad vitae placeat repellat minus. Amet, minima doloremque accusamus
            ratione necessitatibus, eum esse molestiae omnis neque delectus
            deserunt commodi quibusdam praesentium.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <LinksList>
            <HeaderTitle>Our Links</HeaderTitle>
            <ListItem>
              <a href="#">Home</a>
            </ListItem>
            <ListItem>
              <a href="#">About Us</a>
            </ListItem>
            <ListItem>
              <a href="#">Servics</a>
            </ListItem>
            <ListItem>
              <a href="#">Models</a>
            </ListItem>
            <ListItem>
              <a href="#">Contact Us</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <LinksList>
            <HeaderTitle>Other Links</HeaderTitle>
            <ListItem>
              <a href="#">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="#">Support</a>
            </ListItem>
            <ListItem>
              <a href="#">Privacy Policy</a>
            </ListItem>
            <ListItem>
              <a href="#">Terms & Conditions</a>
            </ListItem>
            <ListItem>
              <a href="#">Feedback</a>
            </ListItem>
          </LinksList>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Call Now</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+1 555 - 123456</SmallText>
          </HorizontalContainer>
        </SectionContainer>

        <SectionContainer>
          <HeaderTitle>Mail</HeaderTitle>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@email.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()} Rentour. All rights
          reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
};

export default Footer;
