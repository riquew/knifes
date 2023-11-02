import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginModal.module.css";

const LoginModal = () => {
  const loginForm = React.useRef(null);

  const [form, setForm] = React.useState({
    email: "",
    senha: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    loginForm.current.innerHTML = `Bem vindo, ${form.email}`;
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div className={styles.loginModal}>
      <form
        onSubmit={handleSubmit}
        className={styles.formLogin}
        ref={loginForm}
      >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email || ""}
          onChange={handleChange}
        />
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={form.senha || ""}
          onChange={handleChange}
        />
        <button className={styles.botaoEntrar}>Entrar</button>
        <div className={styles.cardDecorador}></div>
        <p>
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
