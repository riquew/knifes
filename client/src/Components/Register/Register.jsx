import React from "react";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    logradouro: "",
    numero: "",
    cidade: "",
    estado: "",
  });
  const [textoButton, setTextoButton] = React.useState("REGISTRAR");
  const navigate = useNavigate();

  const logradouro = React.useRef(null);
  const cidade = React.useRef(null);
  const estado = React.useRef(null);

  function makeQuery() {
    const query = {
      sql: `INSERT INTO CLIENTE (NOME, EMAIL, SENHA, CEP, LOGRADOURO, NUMERO, CIDADE, ESTADO) VALUES ("${
        form.nome
      }", "${form.email}", ${+form.senha}, ${form.cep}, "${
        form.logradouro
      }", "${form.numero}", "${form.cidade}", 
      "${form.estado}")`,
    };
    return query;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setForm({
      nome: "",
      email: "",
      senha: "",
      cep: "",
      logradouro: "",
      numero: "",
      cidade: "",
      estado: "",
    });
    const sql = makeQuery();
    Api.post("register", sql).then((response) => console.log(response.status));
    setTextoButton("Registrado.");
    navigate("/");
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function getCEP(input) {
    const cep = input.target.value.replace(/\D/g, "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const options = {
      method: "GET",
      mode: "cors",
      headers: {
        "content-type": "application/json;charset=utf-8",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if (data.erro) return;
        logradouro.current.value = data.logradouro;
        cidade.current.value = data.localidade;
        estado.current.value = data.uf;
        form.logradouro = logradouro.current.value;
        form.cidade = cidade.current.value;
        form.estado = estado.current.value;
      });
  }

  return (
    <div className="container">
      <h1 className="titulo-container">Registrar</h1>
      <form className="formAdmin" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          value={form.nome || ""}
          onChange={handleChange}
          placeholder="Seu nome"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={form.email || ""}
          onChange={handleChange}
          placeholder="meuemail@email.com.br"
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          value={form.senha || ""}
          onChange={handleChange}
          placeholder="Pelo menos 6 caracteres."
        />
        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          id="cep"
          value={form.cep || ""}
          onChange={handleChange}
          onBlur={getCEP}
          placeholder="XXXXX-XXX"
        />
        <label htmlFor="logradouro">Logradouro:</label>
        <input
          type="text"
          id="logradouro"
          value={form.logradouro || ""}
          onChange={handleChange}
          ref={logradouro}
        />
        <label htmlFor="numero">Numero:</label>
        <input
          type="text"
          id="numero"
          value={form.numero || ""}
          onChange={handleChange}
        />
        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          id="cidade"
          value={form.cidade || ""}
          onChange={handleChange}
          ref={cidade}
        />
        <label htmlFor="estado">Estado:</label>
        <input
          type="text"
          id="estado"
          value={form.estado || ""}
          onChange={handleChange}
          ref={estado}
        />
        <button className="botaoAcao">{textoButton}</button>
      </form>
    </div>
  );
};

export default Register;
