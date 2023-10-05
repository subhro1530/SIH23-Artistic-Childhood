// pages/index.js

import GetStarted from "@/components/GetStarted";
import Navbar from "../components/Navbar";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <GetStarted />
      <Features/>
    </div>
  );
};

export default Home;
