import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../core/styles/globalStyles';
import Head from 'next/head';
import { theme } from '../core/theme/primary';
import WrapperContent from '../core/components/widgets/WrapperContent';
import Footer from '../core/components/layout/Footer';
import Header from '../core/components/layout/Header';
import ErrorBoundary from '@/widgets/ErrorBoundary';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Axur</title>
      </Head>

      <ThemeProvider theme={theme}>
        <WrapperContent>
          <Header />
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
          <Footer />
        </WrapperContent>
      </ThemeProvider>
    </>
  )
}

export default App
