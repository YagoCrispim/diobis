import Head from 'next/head'
import Link from 'next/link'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`flex flex-col items-center justify-center w-screen h-screen`}
`

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>FromStrap</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Container>
          <span tw="text-center text-5xl">
            <h1 tw="bg-red-600 text-white font-semibold p-4">FromStrap</h1>
          </span>
          <p tw="mt-4">
            Visite nosso <a target="_blank" tw="bg-red-600 p-1 text-white" href="https://fromstrap.com">site</a>
          </p>
        </Container>
      </main> */}
    </div>
  )
}
