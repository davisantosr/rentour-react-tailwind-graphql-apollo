import React from "react";
import {
  faBicycle,
  faCalendarAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepsContainer,
  StepTitle,
  Title,
} from "./styles";

const BookingSteps = () => {
  return (
    <Container>
      <Title>LOOK HOW EASY THIS IS</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest point for rent your transport
          </StepDescription>
        </StepContainer>

        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-up Date</StepTitle>
          <StepDescription>
            Choose the best Date and Vehicle for you
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faBicycle} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Vehicle</StepTitle>
          <StepDescription>
            Find the best vehicle to your tour and enjoy the view.
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

export default BookingSteps;
