import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.span`
  width: fit-content;
  ${tw`flex py-1 px-2 rounded-md text-xs font-medium bg-blue-50 text-gray-900`}
  margin: 5px;
`

export const Value = styled.p`
  &::before {
    content: '';
    background: ${({ color }) => color};
    ${({ color }) => color && tw`w-2 h-2 inline-block rounded-full z-0 mr-2`};
  }
`
