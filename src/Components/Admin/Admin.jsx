import React from "react";
import styles from "./Admin.module.css";

const Admin = () => {
  // function addStyle(e) {
  //   e.style.backgroundColor = "white";
  //   e.style.border = "2px solid #895B34";
  // }
  return (
    <div className="container">
      <h1>Cadastrar Produto</h1>
      <form className="formAdmin">
        <label name="nome">Nome do Produto:</label>
        <input
          type="text"
          name="nome"
          placeholder="Nome do Produto"
          // onFocus={(event) => addStyle(event.target)}
        />
        <label name="imagem">Link Imagem:</label>
        <input type="text" placeholder="https://www.testedeimagem.com/" />
        <label name="quantidade">Quantidade:</label>
        <input type="number" name="quantidade" min="1" defaultValue="1" />
        <label name="preco">Preco do Produto:</label>
        <input type="text" name="preco" placeholder="5.00" />
        <label name="descricao">Descricao do Produto:</label>
        <textarea name="descricao" cols="30" rows="10"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Admin;
