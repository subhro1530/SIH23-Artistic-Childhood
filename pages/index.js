// pages/index.js

import GetStarted from "@/components/GetStarted";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Your other page content goes here */}
      <Navbar />
      <GetStarted/>
    </div>
  );
};

export default Home;
