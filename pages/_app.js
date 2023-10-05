// pages/_app.js

import Head from "next/head";
import "../styles/globals.css"; // Import your global styles
import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import Features from "../components/Features";

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
          href="https://fonts.googleapis.com/css2?family=Aclonica&display=swap"rel="stylesheet"
        />
      </Head>
<<<<<<< HEAD
      <Component {...pageProps} />
=======
      <Navbar />
      <GetStarted/>
      <Features />
      {/* <Component {...pageProps} /> */}
>>>>>>> 96b8144d342b339638aa61efb0791d21ffedd41f
    </div>
  );
}

export default MyApp;
