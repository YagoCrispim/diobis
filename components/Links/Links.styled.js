import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  @media (min-width: 1001px) {
    ${tw`hidden`}
  }
`

export const Content = styled.div`
  ${tw`fixed mt-4 z-50`}
  right: 3rem;
  width: 50%;
  max-width: 250px;

  & div {
    ${tw`w-full flex flex-col justify-end overflow-hidden rounded-lg bg-white`}
    -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
    -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
    box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);

    ${tw`flex justify-center`}

    animation: ${({ visible, noAnimation }) =>
      noAnimation
        ? css`
            ${hide} 0s forwards;
          `
        : visible && !noAnimation
        ? css`
            ${show} 0.2s forwards;
          `
        : css`
            ${hide} 0.2s forwards;
          `};
  }
`

export const Button = styled.button`
  ${tw`flex justify-center w-full`}
  padding: 20px;
  transition: 0.5s;

  & > a {
    ${tw`flex-1 text-gray-700`}
    ${({ active }) => active && tw`text-white`}
  }

  &:hover {
    ${({ active }) => !active && tw`bg-gray-100 cursor-pointer`}
  }

  ${({ active }) => active && tw`bg-blue-500 text-white border-none`}
`

const show = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const hide = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
