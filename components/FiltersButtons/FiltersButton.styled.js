import styled from 'styled-components'
import tw from 'twin.macro'

export const FilterButtons = styled.div`
  ${tw`flex flex-row w-full`}

  button {
    ${tw`
    flex justify-center items-center p-3 rounded-md transition-opacity
    w-9/12 text-sm text-white mr-2
  `}
    &:hover {
      ${tw`opacity-90`}
    }

    &:first-child {
      ${tw`bg-blue-500`}
    }

    &:last-child {
      ${tw`bg-red-500 w-1/5`}
    }

    &:last-child > svg {
      width: 25px;
      color: #fff;
    }
  }
`
