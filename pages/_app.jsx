import GlobalStyles from '../styles/globalStyles'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Provider } from 'react-redux'
import { useStore } from '../store'
import { Creds } from '../components'

const Main = styled.main`
  ${tw`bg-gray-50 mt-16`}
`

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Main>
        <Component {...pageProps} />
      </Main>
      <GlobalStyles />
    </Provider>
  )
}

export default MyApp
