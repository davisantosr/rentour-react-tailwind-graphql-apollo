import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
import { Marginer } from "../marginer";

import "react-calendar/dist/Calendar.css";

import {
  CardContainer,
  DateCalendar,
  Icon,
  ItemContainer,
  LineSeparator,
  Name,
  SmallIcon,
} from "./styles";

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [returnDate, setreturnDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] =
    useState<boolean>(false);
  const [isReturnCalendarOpen, setisReturnCalendarOpen] =
    useState<boolean>(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen(!isStartCalendarOpen);
    setisReturnCalendarOpen(false);
  };

  const toggleReturnDateCalendar = () => {
    setisReturnCalendarOpen(!isReturnCalendarOpen);
    setIsStartCalendarOpen(false);
  };

  return (
    <CardContainer>
      <ItemContainer onClick={toggleStartDateCalendar}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>PICK UP DATE</Name>

        <SmallIcon>
          <FontAwesomeIcon
            icon={isStartCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isStartCalendarOpen && (
          <DateCalendar value={startDate} onChange={setStartDate} />
        )}
      </ItemContainer>

      <LineSeparator />

      <ItemContainer onClick={toggleReturnDateCalendar}>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>RETURN DATE</Name>
        <SmallIcon>
          <FontAwesomeIcon
            icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}
          />
        </SmallIcon>
        {isReturnCalendarOpen && (
          <DateCalendar value={returnDate} onChange={setreturnDate} offset />
        )}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book a ride" />
    </CardContainer>
  );
};

export default BookCard;
