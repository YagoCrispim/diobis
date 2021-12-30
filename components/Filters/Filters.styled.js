import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'

export const FilterButtons = styled.div`
  ${tw`flex flex-row w-full`}
`

export const Content = styled.div`
  ${tw`flex-1 flex-col h-full overflow-auto`};

  /* scrollbar styl */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.4);
  }
`

export const Card = styled.div`
  border-bottom-color: #9ca3af; /* tw-bg-gray-400 */
  height: fit-content;
  padding: 15px;
  ${tw`flex flex-col w-full `}
`

export const Title = styled.span`
  ${tw`text-gray-700 font-medium text-xl`}
`

export const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 24px;
  border-width: 2px;
  ${tw`rounded-full border-gray-600`}

  /* #2563EB -> blue-600 */
  ${({ active }) =>
    active
      ? `background-color: #2563EB; border-color: #2563EB;`
      : `background-color: #fff;`}
`

export const More = styled.span`
  ${tw`flex justify-end`};

  p {
    ${tw`text-gray-700 text-sm`};

    &:hover {
      ${tw`cursor-pointer underline`};
    }
  }
`

export const Options = styled.div`
  span {
    ${tw`text-gray-700 font-normal flex items-center`};

    &:hover ${Circle} {
      ${tw`border-blue-600`};
    }

    &:hover {
      ${tw`cursor-pointer`};
    }

    p {
      ${tw`ml-2 leading-6`};
    }

    @media (max-width: 1001px) {
      ${tw`mt-4 text-lg`}
    }
  }
`

export const Separator = styled.div`
  ${tw`bg-gray-200 w-full h-px`}
`

export const ActionButtons = styled.div`
  width: calc(100% - 6px);
  border-top: 1px solid rgb(156, 163, 175);
  ${tw`flex  items-center p-2 absolute h-16 bg-white bottom-0`};

  button {
    ${tw`flex justify-center items-center p-3 rounded-md text-sm transition-opacity text-white mr-2`};

    &:hover {
      ${tw`opacity-90`};
    }

    &:first-child {
      ${tw`bg-blue-500 w-9/12`};
    }

    &:last-child {
      ${tw`bg-red-500`};
    }

    &:last-child > svg {
      width: 20px;
      ${tw`text-white`}
    }
  }
`

export const Button = styled.button`
  height: 50px;
  ${tw`flex-1 relative bg-blue-600 text-xs text-white`}
`

export const Void = styled.div`
  height: ${tw` w-full h-16`};
`

export const FilterButton = styled.button`
  /* filter icon button */
  width: 50px;
  height: 50px;
  top: 50px;
  right: -50px;
  border-radius: 0px 0.5rem 0.5rem 0px;
  ${tw`absolute bg-blue-600 flex justify-center cursor-pointer items-center`};

  /* filter icon */
  & > svg {
    width: 30px;
    height: 30px;
    ${tw`text-white`};
  }
`

export const Container = styled.div`
  ${tw`z-10 bg-white fixed ease-in-out shadow-xl`};
  width: 270px;
  box-shadow: 7px 2px 6px rgba(0, 0, 0, 0.1);
  height: calc(100vh - 4rem);

  animation: ${({ visible, noAnimation }) =>
    noAnimation
      ? css`
          ${hide} 0s forwards;
        `
      : visible && !noAnimation
      ? css`
          ${show} 0.7s forwards;
        `
      : css`
          ${hide} 0.7s forwards;
        `};
`

const show = keyframes`
  from {
    left: -270px;
  }

  to {
    left: 0px;
  }
`

const hide = keyframes`
  from {
    left: 0px;
  }

  to {
    left: -270px;
  }
`
