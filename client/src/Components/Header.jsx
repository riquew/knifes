import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logoBranco from "../img/logoBranco.svg";
import login from "../img/login.svg";

const Header = () => {
  const [loginModal, setLoginModal] = React.useState();

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
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/personalizar">Personalizar</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/register">
                <img src={login} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
