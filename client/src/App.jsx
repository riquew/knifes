import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";
import Produtos from "./Components/Produtos/Produtos";
import Produto from "./Components/Produto/Produto";
import Personalizar from "./Components/Personalizar/Personalizar";
import Contato from "./Components/Contato/Contato";
import Login from "./Components/Login/Login";
import Admin from "./Components/Admin/Admin";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<Produto />} />
          <Route path="/personalizar" element={<Personalizar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
