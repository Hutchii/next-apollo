import Layout from "../components/UI/Layout";
import { GlobalStyles, lightTheme, darkTheme } from "../styles/Global";
import { ApolloProvider } from "@apollo/client";
import Head from "next/head";
import { useApollo } from "../libs/apolloClient";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);
  const apolloClient = useApollo(pageProps);
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Layout
          onClickHandler={() => setTheme((prevValue) => !prevValue)}
          theme={theme}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
