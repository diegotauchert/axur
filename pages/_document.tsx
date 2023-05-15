import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html lang="pt-br" className="scroll-smooth overscroll-none">
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#FFFFFF" />
      <meta name="robots" content="noindex, nofollow" />
      <meta name="description" content="Axur Coding Interview with Diego Tauchert" />
      <link rel="canonical" href="https://www.axur.com/" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300&display=swap" rel="stylesheet" />
      <link rel="icon" href="/assets/images/favicon.png" type="image/png" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;