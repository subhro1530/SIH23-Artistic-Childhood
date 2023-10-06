// pages/index.js

import GetStarted from "@/components/GetStarted";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import SignUp from "@/components/SignUp";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <GetStarted />
      <Features/>
      <Pricing />
      <SignUp />
      <TrustedBy />
      <Footer/>
    </div>
  );
};

export default Home;
