import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`flex fixed left-0 bottom-0 bg-white shadow-2xl p-2 justify-center items-center w-full`}
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 2;

  @media (max-width: 1001px) {
    ${tw`fixed left-auto bg-white mt-8 top-12 z-50`}
    -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
    -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
    box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
    height: 15%;
    width: 80%;
    right: 5rem;
    max-width: 250px;
    min-height: 200px;

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

export const Cred = styled.div`
  ${tw`flex flex-row justify-center items-center`}
  width: 670px;

  // Cred mobile
  @media (max-width: 1001px) {
    ${tw`flex flex-col w-full items-start`}
  }
`

export const Separator = styled.div`
  ${tw`hidden`}

  @media (max-width: 1001px) {
    ${tw`flex w-full justify-center`}

    & div {
      ${tw`flex justify-center w-3/4 bg-gray-300`}
      height: 1px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`

export const Title = styled.div`
  ${tw`flex flex-row justify-start text-gray-600 text-lg font-semibold pl-4 items-center w-full`}

  @media (max-width: 1001px) {
    ${tw`mb-3`}
  }
`

export const Infos = styled.div`
  ${tw`flex flex-row justify-around px-14 items-center`}
  width: 100%;

  & :last-child {
    content: '|';
  }

  /* Container com infos */
  @media (max-width: 1001px) {
    ${tw`flex w-full p-0 justify-start`}
  }

  // nomes
  & div:first-child {
    /* background-color: yellow; */
    @media (max-width: 1001px) {
      width: 70%;

      & span {
        display: flex;
        justify-content: flex-start;
      }
    }
  }

  // icons
  & div:last-child {
    ${tw`flex w-1/2 justify-center`}

    & svg {
      transition: 0.2s;
      margin: 10px;
      width: 20px;
      padding: 10;

      @media (max-width: 1001px) {
        margin: 8px;
      }

      &:hover {
        cursor: pointer;
        filter: invert(0.5);
      }
    }

    @media (max-width: 1001px) {
      ${tw`flex`}
      width: 30%;

      /* FIX */
      margin-left: -15px;
    }
  }
`

export const Name = styled.div`
  ${tw`flex justify-center w-full`}
  padding-left: 10px;
  padding-right: 10px;

  @media (max-width: 1001px) {
    /* ${tw`bg-blue-600`} */
  }

  & span {
    ${tw`flex text-base`}
    color: rgb(55, 65, 81);
    justify-content: center;

    @media (max-width: 1001px) {
      ${tw`flex flex-row w-full text-lg items-start`}
    }
  }
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
