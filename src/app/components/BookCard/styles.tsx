import styled, { css } from "styled-components";
import tw from "twin.macro";
import Calendar from "react-calendar";
import { SCREENS } from "../responsives";

export const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
    flex
    justify-center
    items-center
    rounded-md    
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-6
    md:pr-6
  `}
`;

export const ItemContainer = styled.div`
  ${tw`
    flex
    relative 
    cursor-pointer
  `}
`;

export const Icon = styled.span`
  ${tw`
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
  color: #bd8afb;
`;

export const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-2
    select-none
  `}
`;

export const Name = styled.span`
  ${tw`
  text-xs
  md:text-sm     
  `}
  color: gray;
  font-weight: 600;
`;

export const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;

export const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
  position: absolute;
  max-width: none;
  top: 3em;
  left: 0;
  user-select: none;

  ${({ offset }) =>
    offset &&
    css`
      left: -7em;
    `}
  @media (min-width: ${SCREENS.md}) {
    top: 3em;
    left: -1em;
  }
`;
