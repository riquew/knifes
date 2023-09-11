import React from "react";
import styles from "./Destaques.module.css";
import destaque0 from "../../../../img/destaques/destaque0.jpg";
import destaque1 from "../../../../img/destaques/destaque1.jpg";
import destaque2 from "../../../../img/destaques/destaque2.jpg";
import destaque3 from "../../../../img/destaques/destaque3.jpg";

const Destaques = () => {
  const listaDestaque = [destaque0, destaque1, destaque2, destaque3];

  return (
    <div className="container">
      <h1 className="titulo-container">Destaques</h1>
      <ul className={styles.destaque}>
        {listaDestaque.map((destaque) => {
          return (
            <li key={listaDestaque.indexOf(destaque)}>
              <img src={destaque} alt="" height={"400px"} width={"600px"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Destaques;
