import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.div`
  background-color: rgb(148, 138, 252);
  /* min-height: 24em; */
  ${tw`
    flex
    flex-col
    min-w-full
    items-center
    justify-center
    pt-8
    pb-8
    md:pt-12
  `}
`;

export const InnerContainer = styled.div`
  ${tw`
    flex
    w-full
    h-full
    max-w-screen-2xl
    flex-wrap
    justify-center
  `}
`;

export const AboutContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    md:mr-16
  `}
`;

export const AboutText = styled.p`
  ${tw`
    text-white
    text-sm
    font-normal
    max-w-xs
    leading-5
    mt-2
  `}
`;

export const LinksList = styled.ul`
  ${tw`
    outline-none
    list-none
    flex
    flex-col
  `}
`;

export const ListItem = styled.li`
  ${tw`
    mb-3
  `}
  & > a {
    ${tw`
      text-sm
      text-white
      hover:text-gray-400
      transition-all
    `}
  }
`;

export const HeaderTitle = styled.h3`
  ${tw`
    text-xl
    font-extrabold
    text-white
    mb-3
  `}
`;

export const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
    mr-2
    w-full
    md:w-auto
    md:mr-16
    pl-10
    pr-10
    md:pl-3
    md:pr-3
    mt-5
    md:mt-0
  `}
`;

export const RedIcon = styled.span`
  ${tw`
    w-7
    h-7

    rounded-full
    flex
    items-center
    justify-center
    text-white
    text-base
    mr-2
  `}
`;

export const HorizontalContainer = styled.div`
  ${tw`
    flex
    items-center
  `}
`;

export const SmallText = styled.h6`
  ${tw`
    text-white
    text-sm
  `}
`;

export const BottomContainer = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    max-w-screen-2xl
    mt-4
  `}
`;

export const CopyrightText = styled.small`
  font-size: 11px;
  color: #fff;
`;
