import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logoBranco from "../img/logoBranco.svg";
import login from "../img/login.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logoBranco} alt="" />
          <p>
            <span style={{ fontSize: 12 }}>DOM</span> <br /> FACONE
          </p>
        </div>
        <nav className={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/personalizar">Personalizar</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/login">
            <img src={login} alt="" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
