import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`fixed bg-white flex justify-center items-center mt-6 top-12 z-50`}
  -webkit-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
  -moz-box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
  box-shadow: 0px 5px 10px 0px rgba(50, 50, 50, 0.56);
  height: 15%;
  width: 80%;
  right: 5rem;
  max-width: 250px;
  min-height: 200px;
  border-radius: 10px;

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
`


export const Content = styled.div`
  flex: 1;
  margin: 10px;
`

export const Cred = styled.div`
  ${tw`flex flex-col w-full items-start`}
`

export const Separator = styled.div`
  ${tw`flex w-full justify-center`}

  & div {
    ${tw`flex justify-center w-3/4 bg-gray-300`}
    height: 1px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Title = styled.div`
  ${tw`w-full mb-3`};
  font-size: 1.2rem;
`

export const Infos = styled.div`
  ${tw`flex w-full items-center`}
  width: 95%;
  margin-left: 5px;

  // nomes
  & div:first-child {
    width: 80%;
  }

  // icons
  & div:last-child {
    ${tw`flex`}
    width: 30%;

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
  }
`

export const Name = styled.div`
  height: 100%;

  & span {
    ${tw`flex justify-start items-center text-base text-lg`}
    color: rgb(55, 65, 81);
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
