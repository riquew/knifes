import React from "react";
import styles from "./ProdutoCard.module.css";

const ProdutoCard = ({ id, nome, imagem, quantidade, preco, descricao }) => {
  function editaPreco(preco) {
    const precoEditado = preco.toFixed(2).replace(".", ",");
    return precoEditado;
  }

  const precoEditado = preco.toString().replace(".", ",");
  const precoPix = editaPreco(preco * 0.9);
  const precoParcelado = editaPreco(preco / 10);
  return (
    <div className={styles.card}>
      <div className={styles.cardImagem}>
        <img src={imagem} alt="" />
      </div>
      <div className={styles.cardTexto}>
        <h3>{nome}</h3>
        <div className={styles.cardDecorador}></div>
        <p className={styles.precoPix}>
          R$ {precoPix} <span>no PIX</span>
        </p>
        <p className={styles.precoParcelado}>
          ou R$ {precoEditado} em 10x R$ {precoParcelado}
        </p>
      </div>
    </div>
  );
};

export default ProdutoCard;
