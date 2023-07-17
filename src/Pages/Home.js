import React from "react";
import FetchNews from "../Component/FetchNews";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <FetchNews />
      </div>
    </>
  );
};

export default Home;
