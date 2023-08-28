import React from "react";
import styles from "./ProdutoCard.module.css";

const ProdutoCard = ({ id, nome, imagem, quantidade, preco, descricao }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImagem}>
        <img src={imagem} alt="" />
      </div>
      <div className={styles.cardTexto}>
        <h3>{nome}</h3>
        <p>R$ {preco}</p>
        <p>10X R$ {preco / 10} sem juros</p>
        <button className={styles.botaoComprar}>COMPRAR</button>
      </div>
    </div>
  );
};

export default ProdutoCard;
