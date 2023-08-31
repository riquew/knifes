import React from "react";
import foto0 from "../../../img/slide/slide0.jpg";
import foto1 from "../../../img/slide/slide1.jpg";
import foto2 from "../../../img/slide/slide2.jpg";
import styles from "./Slide.module.css";

const Slide = () => {
  let styleSlide = {
    marginBottom: `900px`,
    background: `url(${foto0})`,
    backgroundSize: `cover`,
    color: `#fff`,
  };

  const listaTexto = [
    {
      index: 0,
      titulo: "AFIADA",
      subTitulo: "A afiação que você precisa.",
      foto: foto0,
    },
    {
      index: 1,
      titulo: "PRECISA",
      subTitulo: "A precisão necessária para as tarefas diárias",
      foto: foto1,
    },
    {
      index: 2,
      titulo: "CORTANTE",
      subTitulo: "O melhor corte do país",
      foto: foto2,
    },
  ];

  const [textoSlide, setTextoSlide] = React.useState(listaTexto[0]);

  function changeText(action) {
    console.log(styleSlide.background);
    if (textoSlide.index === 2 && action === "forward") {
      setTextoSlide(listaTexto[0]);
    } else if (textoSlide.index === 0 && action === "back") {
      setTextoSlide(listaTexto[2]);
    } else if (action === "forward") {
      setTextoSlide(listaTexto[textoSlide.index + 1]);
    } else {
      setTextoSlide(listaTexto[textoSlide.index - 1]);
    }
  }

  function goBack() {
    // slide.current.style.backgroundImage = "url(../../../img/slide/slide0.jpg)";
    console.log(slide.current);
    slide.current.style.backgroundPositionX = +window.innerWidth;
    changeText("back");
  }

  function goForward() {
    // slide.current.style.backgroundImage = "url(../../../img/slide/slide2.jpg)";
    slide.current.style.backgroundPositionX = -window.innerWidth;
    changeText("forward");
  }

  const slide = React.useRef(null);
  const titulo = React.useRef(null);
  const subTitulo = React.useRef(null);

  console.log(window.innerWidth);

  return (
    <div style={styleSlide} ref={slide}>
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
