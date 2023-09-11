import React from "react";
import styles from "./Painel.module.css";
import painel0 from "../../../../img/painel/painel0.jpg";
import painel1 from "../../../../img/painel/painel1.jpg";
import painel2 from "../../../../img/painel/painel2.jpg";
import painel3 from "../../../../img/painel/painel3.jpg";

const Painel = () => {
  return (
    <>
      <div className="container">
        <div className={styles.painelConteudo}>
          <div className={styles.painelTextoContainer}></div>
          <img src={painel0} alt="" />
          <img src={painel1} alt="" />
          <div className={styles.painelTextoContainer}></div>
          <div className={styles.painelTextoContainer}></div>
          <img src={painel2} alt="" />
          <img src={painel3} alt="" />
          <div className={styles.painelTextoContainer}></div>
        </div>
      </div>
    </>
  );
};

export default Painel;
