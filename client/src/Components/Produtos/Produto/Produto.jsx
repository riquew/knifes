import React from "react";

const Produto = ({ id, nome, imagem, quantidade, preco, descricao }) => {
  return (
    <div>
      <img src={imagem} alt="" />
      <h3>{nome}</h3>
      <p>{preco}</p>
    </div>
  );
};

export default Produto;
