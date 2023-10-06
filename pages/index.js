// pages/index.js

import GetStarted from "@/components/GetStarted";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Pricing from "../components/Pricing";

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <GetStarted />
      <Features/>
      <Pricing/>
    </div>
  );
};

export default Home;
