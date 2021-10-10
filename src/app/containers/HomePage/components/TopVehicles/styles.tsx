import styled from "styled-components";
import tw from "twin.macro";

export const TopVehiclesContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

export const Title = styled.h2`
  ${tw`
    text-2xl
    lg:text-4xl
    text-black
    font-black
  `}
`;

export const VehiclesContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center 
    mt-7
    md:mt-10
  `}
`;

export const EmptyVehicles = styled.div`
  ${tw`
    w-full
    flex
    items-center
    justify-center
    text-gray-500
    
  `}
`;

export const LoadingContainer = styled.div`
  ${tw`
    w-full
    flex
    items-center
    justify-center
    text-base
    text-black
    mt-9
  `}
`;
