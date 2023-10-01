// pages/_app.js

import Head from "next/head";
import "../styles/globals.css"; // Import your global styles
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Aclonica&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
