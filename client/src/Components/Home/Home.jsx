import React from "react";
import Slide from "./HomeComponents/Slide/Slide";
import Destaques from "./HomeComponents/Destaques/Destaques";
import Custom from "./HomeComponents/Custom/Custom";

const Home = () => {
  return (
    <>
      <Slide />;
      <Destaques />
      <Custom />
    </>
  );
};

export default Home;
