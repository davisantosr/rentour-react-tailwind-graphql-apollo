import React from "react";

import bikeImage from "../../../../../assets/images/biking.png";

import {
  AboutUsContainer,
  BikeContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./styles";

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <BikeContainer>
        <img src={bikeImage} alt="biking" />
      </BikeContainer>
      <InfoContainer>
        <Title>
          Our goal is to guarantee that you have one of the bests tour
          experiences ever!
        </Title>
        <InfoText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          quibusdam perferendis esse non earum, exercitationem alias sunt quia
          nesciunt. Vitae, velit nemo! Quia tempore suscipit cumque maxime
          repellat, quae laudantium ea? Tempora assumenda molestias quia
          officiis, vero tempore, sequi necessitatibus adipisci eum amet
          exercitationem repellat aliquam! Id illo quibusdam obcaecati.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
