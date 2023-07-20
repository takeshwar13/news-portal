import React from "react";
import FetchNews from "../Component/FetchNews";
import HomeDisplay from "../Component/HomeDisplay";

const Home = () => {
  return (
    <>
      <div>
        <HomeDisplay />
        <FetchNews />
      </div>
    </>
  );
};

export default Home;
