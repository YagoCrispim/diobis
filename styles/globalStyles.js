import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    * { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); }
  }

  button:focus {
    outline: none;
    box-shadow: none;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased h-full bg-gray-50`};

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
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
