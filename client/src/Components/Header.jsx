import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logoBranco from "../img/logoBranco.svg";
import login from "../img/login.svg";
import LoginModal from "./LoginModal/LoginModal";

const Header = () => {
  const [loginModal, setLoginModal] = React.useState(false);

  function handleClickModal() {
    setLoginModal(!loginModal);
    document.addEventListener("click", handleClickOutside);
  }

  function handleClickOutside(event) {
    if (event.target.dataset.form !== "form") setLoginModal(false);
    document.removeEventListener("click", handleClickModal);
  }

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
            <li className={styles.iconeLogin} data-form="form">
              <img
                src={login}
                alt=""
                onClick={handleClickModal}
                data-form="form"
              />
              {loginModal ? <LoginModal /> : <p></p>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
