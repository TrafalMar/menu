import "../styles/globals.css";
import "../styles/404.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "../src/components/Layout/Layout";
import Main from "../src/components/Layout/Main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Assistant</title>
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </Layout>
  );
}
export default MyApp;
