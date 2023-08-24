import React from "react";
import styles from "./Admin.module.css";
import Api from "../../Api";

const Admin = () => {
  const [form, setForm] = React.useState({
    nome: "",
    imagem: "",
    quantidade: 1,
    preco: "",
    descricao: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [textoButton, setTextoButton] = React.useState("Enviar");

  function makeQuery() {
    const query = {
      sql: `INSERT INTO PRODUTOS (NOME, IMAGEM, QUANTIDADE, PRECO, DESCRICAO) VALUES ("${
        form.nome
      }", "${form.imagem}", ${+form.quantidade}, ${+form.preco}, "${
        form.descricao
      }")`,
    };
    return query;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const sql = makeQuery();
    Api.post("admin", sql).then((response) => console.log(response.status));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className={"container"}>
      <h1 className="titulo">Cadastrar Produto</h1>
      <form className="formAdmin" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do Produto:</label>
        <input
          type="text"
          id="nome"
          value={form.nome || ""}
          onChange={handleChange}
          placeholder="Nome do Produto"
        />
        <label htmlFor="imagem">Link Imagem:</label>
        <input
          type="text"
          id="imagem"
          value={form.imagem || ""}
          onChange={handleChange}
          placeholder="https://www.testedeimagem.com/"
        />
        <label htmlFor="quantidade">Quantidade:</label>
        <input
          type="number"
          id="quantidade"
          min="1"
          value={form.quantidade || 1}
          onChange={handleChange}
        />
        <label htmlFor="preco">Preco do Produto:</label>
        <input
          type="text"
          id="preco"
          placeholder="5.00"
          value={form.preco || ""}
          onChange={handleChange}
        />
        <label htmlFor="descricao">Descricao do Produto:</label>
        <textarea
          id="descricao"
          cols="30"
          rows="10"
          value={form.descricao || ""}
          onChange={handleChange}
        ></textarea>
        <button>{textoButton}</button>
      </form>
    </div>
  );
};

export default Admin;
