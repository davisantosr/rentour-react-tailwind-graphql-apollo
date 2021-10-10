import React from "react";

import scooter from "../../../../../assets/images/scooter.png";
import blob from "../../../../../assets/images/blob.svg";

import {
  TopSectionContainer,
  LeftContainer,
  RightContainer,
  Slogan,
  Description,
  BlobContainer,
  StandAloneScooter,
  ButtonsContainer,
} from "./styles";
import Button from "../../../../components/Button";

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent a Small Vehicle and Enjoy Your Tour</Slogan>
        <Description>
          You can rent a Scooter, Eletric Bike, Bike and so on. We're sure you
          will get the best from your tour ride.
        </Description>
        <ButtonsContainer>
          <Button text="RENT A VEHICLE" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={blob} alt="blob" />
        </BlobContainer>
        <StandAloneScooter>
          <img src={scooter} alt="scooter" />
        </StandAloneScooter>
      </RightContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
