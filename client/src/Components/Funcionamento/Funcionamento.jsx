import React from "react";
import styles from "./Funcionamento.module.css";

const Funcionamento = () => {
  const date = new Date();
  const diaSemana = date.getDay();
  const horario = date.getHours();

  const icon = React.useRef(null);

  React.useEffect(() => {
    verificaAberto();
  }, []);

  function verificaAberto() {
    if (8 <= horario <= 18 && diaSemana != 0 && diaSemana != 6) {
      icon.current.classList.add(`${styles.aberto}`);
    } else {
      icon.current.classList.add(`${styles.fechado}`);
    }
  }

  return (
    <div className={styles.conteudo}>
      08-18h de seg à sab - <div className={styles.iconeFunc} ref={icon}></div>
    </div>
  );
};

export default Funcionamento;
