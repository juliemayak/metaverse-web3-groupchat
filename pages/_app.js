import Head from 'next/head';
import { MoralisProvider } from 'react-moralis';
import '../styles/globals.css';
import '../styles/styles2.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <Head>
          <title>Metaverse</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
}

export default MyApp;
