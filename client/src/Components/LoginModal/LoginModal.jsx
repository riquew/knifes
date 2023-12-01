import React from "react";
import { Link } from "react-router-dom";
import Api from "../../Api";
import styles from "./LoginModal.module.css";

const LoginModal = () => {
  const loginForm = React.useRef(null);

  const [form, setForm] = React.useState({
    email: "",
    senha: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const sql = {
      sql: `SELECT * FROM CLIENTE WHERE EMAIL = '${form.email}'`,
    };
    Api.post("/", sql).then((response) => {
      if (response.data.length > 0 && form.senha === response.data[0].SENHA) {
        const userName = response.data[0].NOME;
        loginForm.current.innerHTML = `Bem vindo, ${userName}.`;
      } else {
        loginForm.current.innerHTML = `Usuário e/ou senha inválidos.`;
      }
    });
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className={styles.loginModal} data-form="form">
      <form
        onSubmit={handleSubmit}
        className={styles.formLogin}
        ref={loginForm}
        data-form="form"
      >
        <label htmlFor="email" data-form="form">
          Email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email || ""}
          onChange={handleChange}
          data-form="form"
        />
        <label htmlFor="senha" data-form="form">
          Senha:
        </label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={form.senha || ""}
          onChange={handleChange}
          data-form="form"
        />
        <button className={styles.botaoEntrar} data-form="form">
          Entrar
        </button>
        <div className={styles.cardDecorador} data-form="form"></div>
        <p data-form="form">
          Novo por aqui?{" "}
          <Link to="/register">
            <span>Registre-se</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginModal;
