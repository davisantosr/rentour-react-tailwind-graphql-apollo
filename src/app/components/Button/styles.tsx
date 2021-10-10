import styled from "styled-components";
import tw from "twin.macro";

export const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `}
`;

export const OutlinedButton = styled(BaseButton)`
  background-color: #bd8afb;
  ${tw`
    hover:bg-transparent
    
  `}

  &:hover {
    color: #bd8afb;
    font-weight: bold;
    border: 2px solid #bd8afb;
  }
`;

export const FilledButton = styled(BaseButton)`
  ${tw`
  bg-transparent
`}

  border: #bd8afb;
  color: #bd8afb;

  &:hover {
    color: #fff;
    font-weight: bold;
    border: #fff;
    border: 0;
  }
`;
