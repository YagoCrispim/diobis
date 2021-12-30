import styled from 'styled-components'
import tw from 'twin.macro'

export const Header = styled.header`
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  ${tw`w-full fixed z-50 left-0 h-16 top-0 bg-white text-gray-700`}
`

export const Container = styled.div`
  ${tw`flex items-center px-6 w-full h-full mx-auto`}
  width: 90%;
`

export const LogoContainer = styled.div`
  ${tw`w-20 mr-9 cursor-pointer`};
`

export const Navbar = styled.nav`
  ${tw`w-full h-full`}

  @media (max-width: 1001px) {
    display: none;
  }
`

export const NavbarMobile = styled.nav`
  display: none;

  @media (max-width: 1001px) {
    ${tw`flex w-full justify-end items-center cursor-pointer`}

    & button {
      ${tw` flex justify-center items-center`}
      width: 30px;
      height: 30px;
      transition: 0.5s;

      &:hover {
        filter: invert(0.2);
      }

      &:first-child {
        ${tw`mr-5`}
      }
    }
  }
`

export const Navigator = styled.ul`
  ${tw`flex flex-1 list-none h-full`}
`

export const Link = styled.li`
  ${({ active }) => active && tw`border-b-2 border-blue-500`}
  ${tw`flex items-center h-full text-sm font-semibold transition-colors px-4`}
  &:hover {
    ${tw`text-blue-500`}
  }
  &:not(:last-child) {
    ${tw`mr-6`}
  }
`
