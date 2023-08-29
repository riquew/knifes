import React from "react";
import slide1 from "../../../img/slide/slide13.jpg";
import styles from "./Slide.module.css";

const Slide = () => {
  const listaTexto = [
    { index: 0, titulo: "AFIADA", subTitulo: "A afiação que você precisa." },
    {
      index: 1,
      titulo: "PRECISA",
      subTitulo: "A precisão necessária para as tarefas diárias",
    },
    { index: 2, titulo: "CORTANTE", subTitulo: "O melhor corte do país" },
  ];

  const [textoSlide, setTextoSlide] = React.useState(listaTexto[0]);

  function changeText() {
    console.log(textoSlide.index);
    if (textoSlide.index === 2) {
      setTextoSlide(listaTexto[0]);
    } else {
      setTextoSlide(listaTexto[textoSlide.index + 1]);
    }
  }

  function goBack() {
    slide.current.style.backgroundPositionX = +window.innerWidth;
    // titulo.current.innerText = "TESTE TITULO VOLTA";
    // subTitulo.current.innerText = "TESTE SUBTITULO VOLTA";
  }

  function goForward() {
    slide.current.style.backgroundPositionX = -window.innerWidth;
    changeText();
    // titulo.current.innerText = "TESTE TITULO VAI";
    // subTitulo.current.innerText = "TESTE SUBTITULO VAI";
  }

  const slide = React.useRef(null);
  const titulo = React.useRef(null);
  const subTitulo = React.useRef(null);

  console.log(window.innerWidth);

  return (
    <div className={styles.slide} ref={slide}>
      <div className={"container"}>
        <div className={styles.slideTexto}>
          <h1 ref={titulo}>{textoSlide.titulo}</h1>
          <h3 ref={subTitulo}>{textoSlide.subTitulo}</h3>
        </div>
        <div className={styles.slideButtons}>
          <div className={styles.arrowButton} onClick={goBack}>
            <i className={styles.left}></i>
          </div>
          <div className={styles.arrowButton} onClick={goForward}>
            <i className={styles.right}></i>
          </div>
        </div>
        <div className={styles.slideControl}>
          <div className={`${styles.square} ${styles.active}`}></div>
          <div className={styles.square}></div>
          <div className={styles.square}></div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
