import React from "react";
import styles from "./Painel.module.css";
import painel0 from "../../../../img/painel/painel0.jpg";

const Painel = () => {
  return (
    <>
      <div className="container">
        <div className={styles.painelConteudo}>
          <div className={styles.painelTextoContainer}></div>
          <img src={painel0} alt="" />
          <img src={painel0} alt="" />
          <div className={styles.painelTextoContainer}></div>
          <div className={styles.painelTextoContainer}></div>
          <img src={painel0} alt="" />
          <img src={painel0} alt="" />
          <div className={styles.painelTextoContainer}></div>
        </div>
      </div>
    </>
  );
};

export default Painel;
