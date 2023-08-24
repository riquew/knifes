import React from "react";
import slide1 from "../../../img/slide/slide13.jpg";
import styles from "./Slide.module.css";

const Slide = () => {
  return (
    <div className={styles.slide}>
      <div className={"container"}>
        <div className={styles.slideTexto}>
          <h1>AFIADA</h1>
          <h3>O corte que voce precisa</h3>
        </div>
      </div>
    </div>
  );
};

export default Slide;
