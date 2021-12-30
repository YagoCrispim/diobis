import styled, { keyframes, css } from 'styled-components'
import tw from 'twin.macro'

export const ClipboardBubble = styled.div`
  width: fit-content;
  right: 50px;
  top: -6px;
  box-shadow: 0px 5px 5px 0px rgba(50, 50, 50, 0.3);
  ${tw`p-2 absolute rounded-lg text-sm bg-blue-600 text-white font-semibold`}

  ${({ visible }) => {
    if (visible) {
      return css`
        opacity: 1;
        transition: 0.2s;
      `
    } else {
      return css`
        opacity: 0;
        transition: 0.2s;
      `
    }
  }};
`
