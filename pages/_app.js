import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../core/styles/globalStyles';
import Head from 'next/head'
import { theme } from '../core/theme/primary';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Axur</title>
        <meta name="description" content="Axur Coding Interview with Diego Tauchert" />
        <link rel="icon" href="/assets/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap" rel="stylesheet" />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
