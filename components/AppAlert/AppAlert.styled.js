import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  height: fit-content;

  ${tw`flex items-center justify-start w-full py-3 px-4 border-2 rounded-lg text-sm`}

  ${({ type }) => {
    switch (type) {
      case 'success':
        return tw`bg-green-100 border-green-200 text-green-700`
      case 'alert':
        return tw`bg-yellow-100 border-yellow-200 text-yellow-700`
      case 'warning':
        return tw`bg-red-100 border-red-200 text-red-700`
      case 'message':
        return tw`bg-blue-100 border-blue-200 text-blue-700`
      default:
        return ''
    }
  }}


  a {
    ${tw`font-semibold`}
  }
`
