import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../core/styles/globalStyles';
import Head from 'next/head';
import { theme } from '../core/theme/primary';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Axur</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
