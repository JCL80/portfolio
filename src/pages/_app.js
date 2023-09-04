import "@/styles/globals.css";
import AppContext from "@/context/AppContext";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
      </Head>
      <AppContext>
        <Component {...pageProps} />
      </AppContext>
    </>
  );
}
