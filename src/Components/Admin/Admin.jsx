import React from "react";
import styles from "./Admin.module.css";

const Admin = () => {
  const [form, setForm] = React.useState({
    nome: "",
    imagem: "",
    quantidade: 1,
    preco: "",
    descricao: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className="container">
      <h1>Cadastrar Produto</h1>
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
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Admin;
