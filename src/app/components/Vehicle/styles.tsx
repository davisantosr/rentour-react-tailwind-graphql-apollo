import styled from "styled-components";
import tw from "twin.macro";
import Button from "../Button";

export const VehicleContainer = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    p-3
    pb-4
    bg-white
    rounded-md
    m-1
    sm:m-3
    md:m-6
  `}
  min-width: 16.5em;
  min-height: 22.2em;
  max-height: 30.2em;
  box-shadow: 0 1.3px 15px -2px rgba(0, 0, 0, 0.4);
`;

export const VehicleThumbmail = styled.div`
  width: 100%;
  height: 15rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const VehicleName = styled.h3`
  ${tw`
    text-base
    font-bold
    text-black
    mt-1
    mb-1
  `}
`;

export const PricesContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-start
    mt-3
  `}
`;

export const SmallText = styled.p`
  ${tw`
    inline-flex
    text-xs
    font-thin    
  `}
  color: inherit;
`;

export const DailyPrice = styled.h5`
  ${tw`
    font-bold
    text-sm
    mr-3
  `}

  color: #bd8afb;
`;

export const MonthlyPrice = styled.h5`
  ${tw`
    text-gray-500
    font-bold
    text-sm
  `}
`;

export const SmallIcon = styled.span`
  ${tw`
    text-gray-400
    text-sm
    mr-1
  `}
`;

export const VehicleDetailsContainer = styled.div`
  ${tw`
    flex
    w-full
    justify-between
  `}
`;

export const VehicleDetail = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export const VehicleInfo = styled.h6`
  ${tw`
    text-gray-400
    text-xs
  `}
`;

export const Separator = styled.div`
  min-width: 100%;
  min-height: 1px;

  ${tw`
    flex
    bg-gray-300
    mt-3
    mb-3
  `}
`;

export const RentButton = styled(Button)`
  ${tw`
    min-w-full
    mt-5
  `}
`;
