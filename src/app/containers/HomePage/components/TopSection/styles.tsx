import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../../../components/responsives";

export const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12 
    lg:pr-12
  `}
`;

export const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;

export const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

export const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `}
`;

export const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `}
`;

export const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -12em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 30em;
    max-height: 10em;
    right: -2em;
    top: -12em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.md}) {
    width: 30em;
    max-height: 10em;
    right: -2em;
    top: -12em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 35em;
    max-height: 24em;
    right: -2em;
    top: -12em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 45em;
    max-height: 28em;
    right: 1em;
    top: -15em;
    transform: rotate(-20deg);
  }
`;

export const StandAloneScooter = styled.div`
  width: auto;
  height: 15em;
  right: -1em;
  top: -8em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 20em;
    right: 3em;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 16em;
    right: 4em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 23em;
    right: 4em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 35em;
    right: 4em;
    top: -8em;
  }
`;

export const ButtonsContainer = styled.div`
  ${tw`
    flex
    mt-6
    
  `}
`;
