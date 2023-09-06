import React from "react";
import Slide from "./HomeComponents/Slide/Slide";
import Destaques from "./HomeComponents/Destaques/Destaques";
import Custom from "./HomeComponents/Custom/Custom";
import Painel from "./HomeComponents/Painel/Painel";

const Home = () => {
  return (
    <>
      <Slide />;
      <Destaques />
      <Custom />
      <Painel />
    </>
  );
};

export default Home;
