import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Produtos from "./Components/Produtos/Produtos";
import Personalizar from "./Components/Personalizar/Personalizar";
import Contato from "./Components/Contato/Contato";
import Login from "./Components/Login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/personalizar" element={<Personalizar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
