import React from "react";
import styles from "./Custom.module.css";
import destaque0 from "../../../../img/destaques/destaque0.jpg";
import custom1 from "../../../../img/custom/custom1.jpg";
import custom2 from "../../../../img/custom/custom2.jpg";
import custom3 from "../../../../img/custom/custom3.jpg";

const Custom = () => {
  return (
    <>
      <div className="container">
        <h1 className="titulo-container">FACAS CUSTOM</h1>
        <div className={styles.customConteudo}>
          <div className={styles.customPrincipal}>
            <img src={destaque0} alt="" />
          </div>
          <ul className={styles.customLista}>
            <li>
              <img src={custom1} alt="" />
            </li>
            <li>
              <img src={custom2} alt="" />
            </li>
            <li>
              <img src={custom3} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Custom;
